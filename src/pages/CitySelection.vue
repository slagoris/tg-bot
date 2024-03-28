<template>
        <section class="page">
<!--            <Button @click="router.back()">НАЗАД</Button>-->
            <tg-back-button @click="router.back()"/>
            <ul>
                <li v-for="city in cities" :key="city.code">
                    <Button @click="setCity(city)" 
                            :class="{active: useGeneralStore().currentCity?.code === city.code || (city.code === 'other' && useGeneralStore().currentCity?.code && useGeneralStore().currentCity?.code !== 'moscow' && useGeneralStore().currentCity?.code !== 'dubai')}">
                        {{ city.name }}
                    </Button>
                </li>
            </ul>
        <div v-if="useGeneralStore().currentCity?.code && useGeneralStore().currentCity?.code !== 'moscow' && useGeneralStore().currentCity?.code !== 'dubai' ">
                <h1>Выберите Ваш город из списка</h1>
                <ul style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 5px">
                    <li v-for="city in citiesRussian" :key="city.code">
                        <Button @click="setCity(city)" :class="{active: useGeneralStore().currentCity?.code === city.code}" >{{ city.name }}</Button>
                    </li>
                </ul>
            </div>
            <div v-if="useGeneralStore().currentCity && useGeneralStore().currentCity?.code !== 'other'">
                <Button @click="router.push('/menu')">{{useGeneralStore().currentCity?.name}} > Далее</Button>
                <tg-main-button @click="router.push('/menu')" />
            </div>
        </section>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useWebAppMainButton} from "../composables";
import {useGeneralStore} from "../stores/general.ts";
const {
    showMainButton,
    hideMainButton,
    showMainButtonProgress,
    hideMainButtonProgress,
    mainButtonText,
    mainButtonColor,
    mainButtonTextColor,
    isMainButtonActive,
    isMainButtonVisible,
    isMainButtonProgressVisible,
    setMainButtonParams,
} = useWebAppMainButton()
onMounted(() => {
    setMainButtonParams({text: `${useGeneralStore().currentCity?.name} →  Далее` || ''})
})
const router = useRouter()
const selectedCity = ref()
const cities = ref([
    {name: 'Дубай', code: 'dubai'},
    {name: 'Москва', code: 'moscow'},
    {name: 'Другие города РФ', code: 'other'},

])
const citiesRussian = ref([
    {name: 'Москва', code: 'moscow'},
    {name: 'Воронеж', code: 'voronezh'},
    {name: 'Екатеринбург', code: 'ekb'},
    {name: 'Казань', code: 'kazan'},
    {name: 'Краснодар', code: 'krasnodar'},
    {name: 'Н. Челны', code: 'chelny'},
    {name: 'Новосибирск', code: 'novosibirsk'},
    {name: 'Самара', code: 'samara'},
    {name: 'Санкт-Петербург', code: 'spb'},
    {name: 'Сочи', code: 'sochi'},
    {name: 'Ставрополь', code: 'stavropol'},
    {name: 'Уфа', code: 'ufa'},

])
const setCity = (city) => {
    useGeneralStore().setCity(city)
    setMainButtonParams({text:`${city.name} →  Далее` })
    showMainButton()
}
</script>
