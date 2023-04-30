<template>
  <AppShell :class="isDarkMode ? 'dark' : ''">
    <template #header> Hello </template>
    <router-view></router-view>
  </AppShell>
</template>
<script setup lang="ts">
import AppShell from "@/components/AppShell.vue";
import { useThemeStore } from "@/store/index";
import { computed } from "vue";

const store = useThemeStore();

const isDarkMode = computed(()=> store.isDarkMode);

console.log(isDarkMode.value)


</script>