<template>
  <div class="w-full min-h-screen">
    <h1
      class="flex w-full text-xl text-gray-900 dark:text-gray-200 p-5 justify-center"
    >
      Customize Settings
    </h1>

    <div class="flex mt-10 w-full space-x-10 justify-center">
      <p class="text-black dark:text-white">Dark Mode</p>
      <Switch
        v-model="darkModeEnabled"
        :class="darkModeEnabled ? 'bg-blue-600' : 'bg-gray-200'"
        class="relative inline-flex h-6 w-11 items-center rounded-full"
      >
        <span class="sr-only">Enable notifications</span>
        <span
          :class="darkModeEnabled ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white transition"
        />
      </Switch>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { Switch } from "@headlessui/vue";
import { useThemeStore } from "@/store/index";

// store instance
const store = useThemeStore();

// enable and disable dark mode
const darkModeEnabled = ref(store.isDarkMode);

// update dark mode state in store also
watch(darkModeEnabled, () => {
  store.setDarkMode(darkModeEnabled.value);
});
</script>
