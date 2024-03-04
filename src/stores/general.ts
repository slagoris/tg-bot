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
    
    const exchangePair = ref()
    const setExchangePair = (pair: any) => {
        exchangePair.value = pair
    }
    
    return {
        currentLang,
        setLang,
        getLang,

        currentCity,
        getCity,
        setCity,

        exchangePair,
        setExchangePair
    }
})
