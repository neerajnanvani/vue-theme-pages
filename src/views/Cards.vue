<template>
  <div class="w-full min-h-screen py-4">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 my-4 gap-x-6 gap-y-6">
      <div v-for="(data, index) in cardData" :key="index" class="w-full h-44">
        <div
          :class="[ highlightDataId == index ? 'border-gray-900 shadow-xl dark:border-white' : 'border-gray-400 shadow-md dark:border-gray-500' , 
           'flex flex-col w-full h-full border p-2 rounded-md dark:bg-gray-800 bg-gray-100/50']"
        >
          <div class="flex w-full h-10 border-b border-blue-500 p-1">
            <div class="w-2/3 grow text-base font-medium dark:text-gray-100">
              {{ data.job }}
            </div>
            <div
              class="flex text-xs justify-center items-center font-semibold p-1 border 
              border-green-600 dark:border-green-200 rounded-full bg-green-200 dark:bg-green-900 dark:text-white"
            >
              {{ data.experience }} years
            </div>
          </div>
          <div class="h-24 flex flex-col text-sm py-3 space-y-3">
            <div class="flex justify-center items-center space-x-2">
              <span class="font-sm text-gray-500 dark:text-gray-300">
                Education :
              </span>
              <p class="text-base text-gray-600 dark:text-gray-200 truncate">
                {{ data.education }}
              </p>
            </div>
            <div class="flex justify-between">
              <div class="flex justify-center items-center space-x-2">
                <span class="font-sm text-gray-500 dark:text-gray-300">
                  City :
                </span>
                <p class="text-base text-gray-600 dark:text-gray-200">
                  {{ data.city }}
                </p>
              </div>

              <div class="flex justify-center items-center space-x-2">
                <span class="font-sm text-gray-500 dark:text-gray-300">
                  Last Date :
                </span>
                <p class="text-base text-gray-600 dark:text-gray-200">
                  {{ data.lastDate }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="px-2 py-1 border border-red-600 text-red-600 rounded-xl hover:bg-red-500 hover:text-white"
              @click="removeData(index)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { sampleData } from "../assets/sampleData";
import { ref, computed, watch } from "vue";
const cardData = ref([...sampleData]);

const route = useRoute();
function removeData(index: number) {
  cardData.value.splice(index, 1);
}

const highlightDataId = computed(() => {
    const query = route.query;
    return query.id as unknown as number;
})

</script>

