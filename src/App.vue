<template>
  <AppShell :class="isDarkMode ? 'dark' : ''">
    <router-view></router-view>
  </AppShell>
</template>
<script setup lang="ts">
import AppShell from "@/components/AppShell.vue";
import { useThemeStore } from "@/store/index";
import { computed } from "vue";

const store = useThemeStore();

/**
 * Computed property to get the current state of dark mode
 */
const isDarkMode = computed(() => store.isDarkMode);
</script>
