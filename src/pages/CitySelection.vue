<template>
        <section class="page">
            <button @click="router.back()">НАЗАД</button>
            <tg-back-button @click="router.back()"/>
            <div style="width: 100%; margin-bottom: 30px;">
                <img src="/public/images/Logo7Gates-gold.svg" alt="logo 7gg"
                     style="margin-bottom: 30px; height: 100%; max-height: 100px">
            </div>
            <h1>Выберите город</h1>
            <ul>
                <li v-for="(city, index) in cities">
                    <button @click="setCity(city, index)" :class="{active: city.selected}">{{ city.name }}</button>
                </li>
            </ul>
            <div v-if="selectedCity">
                <button @click="router.push('/menu')">{{selectedCity?.name}} > Далее</button>
                <tg-main-button @click="router.push('/menu')" />
            </div>
        </section>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import {useWebAppMainButton} from "../composables";
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
const router = useRouter()
const selectedCity = ref()
const cities = ref([
    {name: 'Дубай', code: 'dubai', selected: false},
    {name: 'Москва', code: 'moscow', selected: false},
    {name: 'Другие города РФ', code: 'other', selected: false},

])
const setCity = (city, index) => {
    selectedCity.value = city
    cities.value.forEach((el) => el.selected = false)
    cities.value[index].selected = true
    setMainButtonParams({text: selectedCity.value.name})
    showMainButton()
}
</script>
