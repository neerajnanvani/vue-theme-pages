import { defineStore } from 'pinia'
import {ref, computed} from "vue";
import { sampleData } from '../assets/sampleData';

export const useThemeStore = defineStore('theme', () => {
    const darkMode = ref(false);
 
    const isDarkMode = computed(() => darkMode.value);


    function setDarkMode(mode: boolean) {
      darkMode.value = mode;
    }
    
    function getSampleData() {
        return sampleData;
    }
    return { isDarkMode, setDarkMode, getSampleData };

})