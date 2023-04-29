<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col h-screen">
    <div class="overflow-x-auto">
      <div
        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 rounded-xl"
      >
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 relative">
            <thead>
              <tr>
                <th class="sticky left-0 top-16 bg-gray-200">SNO</th>
                <th
                  v-for="header in tableHeaders"
                  :key="header"
                  scope="col"
                  class="sticky top-16 px-6 py-3 max-w-10 text-left text-xs font-medium bg-gray-200 text-gray-500 uppercase tracking-wider"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <TableLoader v-if="!apiData" />
              <template v-else>
                <tr v-for="(data, index) in apiData" :key="index">
                  <td
                    class="sticky left-0 border-r bg-white px-6 py-4 w-4 text-sm font-medium text-gray-900"
                  >
                    {{ index + 1 }}
                  </td>
                  <td class="px-6 py-4 max-w-10 text-sm text-gray-500">
                    {{ data.API }}
                  </td>
                  <td class="px-6 py-4 max-w-20 text-sm text-gray-500">
                    {{ data.Description }}
                  </td>
                  <td class="px-6 py-4 max-w-10 text-sm text-gray-500">
                    {{ data.Auth }}
                  </td>
                  <td class="px-6 py-4 max-w-10 text-sm text-gray-500">
                    {{ data.HTTPS }} / {{ data.Cors }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ data.Category }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TableLoader from "@/components/TableLoader.vue";
import axios from "axios";

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

onMounted(async () => {
  const dataUrl = "https://api.publicapis.org/entries";

  const responseData = await axios.get(dataUrl);

  apiData.value = responseData.data.entries;
});

const people = ref([
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  // More people...
]);
</script>
