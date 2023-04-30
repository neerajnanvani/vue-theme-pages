import { defineStore } from 'pinia'
import {ref, computed} from "vue";

export const useThemeStore = defineStore('theme', () => {
    const darkMode = ref(false);
 
    const isDarkMode = computed(() => darkMode.value);


    function setDarkMode(mode: boolean) {
      darkMode.value = mode;
    }
  
    return { isDarkMode, setDarkMode };
  })