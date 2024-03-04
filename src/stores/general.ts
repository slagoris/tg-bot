import {defineStore} from "pinia";
import {ref} from "vue";

export const useGeneralStore = defineStore('generalStore', () => {
    
    const currentLang = ref()
    const setLang = (lang: any) => {
        currentLang.value = lang
    }
    const getLang = () => {
        return currentLang
    }

    const currentCity = ref()
    const setCity = (city: any) => {
        currentCity.value = city
    }
    const getCity = () => {
        return currentCity
    }
    
    return {
        currentLang,
        setLang,
        getLang,

        currentCity,
        getCity,
        setCity
    }
})
