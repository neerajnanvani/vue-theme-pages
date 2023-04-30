<template>
  <tr v-for="index in 10" :key="index">
    <td v-for="index in 6" :key="index" class="px-6 py-4 dark:bg-gray-600">
      <div class="h-4 bg-gray-300 dark:bg-gray-800 animate-pulse"></div>
    </td>
  </tr>
</template>
