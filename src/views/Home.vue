<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col h-screen">
    <div class="overflow-x-auto">
      <div
        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 rounded-xl"
      >
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <thead>
              <tr>
                <th scope="col" 
                  class="sticky top-0 px-6 py-3 max-w-10 text-left text-xs font-medium bg-gray-200
                  dark:bg-gray-700 dark:text-gray-200 text-gray-500 uppercase tracking-wider">
                  S.no
                </th>
                <th
                  v-for="header in tableHeaders"
                  :key="header"
                  scope="col"
                  class="sticky top-0 px-6 py-3 max-w-10 text-left text-xs font-medium bg-gray-200
                  dark:bg-gray-700 dark:text-gray-200 text-gray-500 uppercase tracking-wider"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-600">
              <TableLoader v-if="!tableData.length" />
              <template v-else>
                <tr v-for="(data, index) in tableData" :key="index">
                  <td
                    class="sticky left-0 border-r bg-white dark:bg-gray-500 dark:text-gray-100 px-6 py-4 w-4 text-sm font-medium text-gray-900"
                  >
                    {{startIndex +  index + 1 }}
                  </td>
                  <td class="px-6 py-4 max-w-10 text-sm text-gray-500 dark:bg-gray-500 dark:text-white underline underline-offset-4 hover:text-gray-900 font-semibold">
                    <a :href="data.Link">
                      {{ data.API }}
                    </a>
                  </td>
                  <td class="px-6 py-4 max-w-20 text-sm text-gray-500 dark:bg-gray-500 dark:text-gray-100">
                    {{ data.Description }}
                  </td>
                  <td class="px-6 py-4 max-w-10 text-sm text-gray-500 dark:bg-gray-500 dark:text-gray-100">
                    {{ data.Auth }}
                  </td>
                  <td class="px-6 py-4 max-w-10 text-sm text-gray-500 dark:bg-gray-500 dark:text-gray-100">
                    {{ data.HTTPS }} / {{ data.Cors }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:bg-gray-500 dark:text-gray-100">
                    {{ data.Category }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <div class="w-full flex justify-center space-x-8 mt-10 pb-10">
        <button :disabled="currentPage == 1" :class="[currentPage == 1 ? 'bg-gray-200 text-gray-700 border-1' :
            'bg-blue-100 text-blue-900 hover:border-blue-600 ', 'px-3 py-2 flex items-center rounded-md border-2']"
          @click="currentPage = currentPage - 1">
          <ChevronLeft class="w-4 mr-2" />
          Previous
        </button>
        <button :disabled="!isNextPageAvailable" :class="[isNextPageAvailable ? 'bg-blue-100 text-blue-900 hover:border-blue-600' :
            'bg-gray-200 text-gray-700 border-1', 'px-3 py-2 flex items-center rounded-md border-2']"
          @click="currentPage = currentPage + 1">
          Next
          <ChevronRight class="w-4 ml-2" />
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import TableLoader from "@/components/TableLoader.vue";
import axios from "axios";
import ChevronLeft from "@heroicons/vue/24/solid/ChevronLeftIcon";
import ChevronRight from "@heroicons/vue/24/solid/ChevronRightIcon";

const tableHeaders = ["API", "Description", "Auth", "HTTPS / Cors", "Category"];

const apiData = ref<APIResponseEntries[] | null>(null);

interface APIResponseEntries {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

const currentPage = ref(1);
const startIndex = computed(()=> ( currentPage.value - 1 ) * 100 )

onMounted(async () => {
  const dataUrl = "https://api.publicapis.org/entries";

  const responseData = await axios.get(dataUrl);

  apiData.value = responseData.data.entries;

});


const isNextPageAvailable = computed(() => apiData.value ? currentPage.value * 100 < apiData.value?.length : false ); 

const tableData = computed(() => apiData.value ?  apiData.value.slice(startIndex.value, startIndex.value + 100): []);

</script>
