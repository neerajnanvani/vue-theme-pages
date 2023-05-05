<template>
  <div class="relative inline-block md:w-1/2 lg:w-1/3 w-full mx-5">
    <div class="inline-flex items-center w-full">
      <label for="search" class="sr-only">Search</label>
      <input
        id="search"
        type="text"
        class="block w-full py-2 pl-4 pr-12 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-700 border dark:border-gray-200"
        placeholder="Search"
        v-model="query"
      />
    </div>
    <div
      v-if="query && filteredData.length"
      class="absolute z-40 mt-1 w-full rounded-md bg-white dark:bg-gray-700 dark:border-gray-500 shadow-lg border border-gray-400"
    >
      <ul class="list-none py-1">
        <RouterLink
          v-for="item in filteredData"
          :key="item.job"
          :to="{ name: 'Cards', query: { id: item.id } }"
          @click="query = ''"
        >
          <li
            class="px-3 py-2 hover:bg-gray-100 border-b-2 border-b-slate-100 dark:border-b-slate-600 dark:hover:bg-gray-400 dark:text-gray-200"
          >
            {{ item.job }}
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sampleData } from "../assets/sampleData";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  text: {
    type: string,
    required: true,
  },
});

// query for search
const query = ref("");

/**
 * Computed property get the filtered values according query
 */
const filteredData = computed(() =>
  query.value === ""
    ? sampleData
    : sampleData.filter((data) => {
        return JSON.stringify(data)
          .toLowerCase()
          .includes(query.value.toLowerCase());
      })
);
</script>
