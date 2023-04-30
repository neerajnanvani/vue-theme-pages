import { defineStore } from 'pinia'
import {ref, computed} from "vue";
import { sampleData } from '../assets/sampleData';

export const useThemeStore = defineStore('theme', () => {
    // dark mode state
    const darkMode = ref(false);
 
    // getter for dark mode state
    const isDarkMode = computed(() => darkMode.value);

    /**
     * Function to set state of dark mode
     * 
     * @param {boolean} mode - the mode to switch dark mode
     */
    function setDarkMode(mode: boolean) {
      darkMode.value = mode;
    }  

    /**
     * function to get the sample data for cards page
     * 
     * @returns array of sample data
     */
    function getSampleData() {
        return sampleData;
    }

    return { isDarkMode, setDarkMode, getSampleData };
})