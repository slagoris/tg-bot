<template>
    <section>
        <ul>
            <li v-for="(lang, index) in langs" :key="lang.code">
                
                <Button @click="setLang(lang); impactOccurred('heavy')" :class="{active: useGeneralStore().currentLang?.code === lang.code}">
                    <span v-text="lang?.name"/>
                    <span v-text="lang?.flag" style="margin-left: 10px;"/>
                </Button>
            </li>
        </ul>
        
<!--        <button @click="toggleMainButton">ТОГЛ ГЛАВНОЙ КНОПКИ</button>-->
        <div v-if="useGeneralStore().currentLang">
            <Button @click="router.push('/city')">{{useGeneralStore().currentLang.name}} > Далее</Button>
            <tg-main-button @click="router.push('/city')" />
        </div>
    </section>
   
<!--    <div class="popup-overlay" v-if="pairDialog">-->
<!--        <div class="popup" >-->
<!--            <button class="popup__close" @click="pairDialog = false">x</button>-->
<!--            <h1 style="color: black; text-align: center;">Title</h1>-->
<!--            <div style="width: 100%;">-->
<!--                <input type="number" v-model="pair" >-->
<!--            </div>-->
<!--            <button>Принять</button>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script setup lang="ts">
import {
    useWebApp,
    useWebAppHapticFeedback,
    useWebAppMainButton,
    useWebAppNavigation,
    useWebAppPopup,
    useWebAppQrScanner,
    useWebAppTheme,
    useWebAppViewport
} from '../composables'
import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useGeneralStore} from "../stores/general.ts";
import ExchangeModal from "../components/modal/ExchangeModal.vue";
const  router = useRouter()
onMounted(() => {
   setMainButtonParams({text: `${useGeneralStore().currentLang?.name} →  Далее` || '', color: ' #ffda4a', text_color: '#000'})
})
type StepType = 'lang' | 'city' | 'menu' | 'exchange' | undefined
const pair = ref(null)
const exchangeDialog = ref(false)
const currentStep = ref<StepType>('lang')
const selectedLang = ref()
const selectedCity = ref()
const langs = ref([
    {name: 'Русский', flag: '🇷🇺', code: 'ru'},
    {name: 'English', flag: '🇬🇧', code: 'en'},
    {name: 'Chinese', flag: '🇨🇳', code: 'ch'},
])
const cities = ref([
    {name: 'Дубай', code: 'dubai', selected: false},
    {name: 'Москва', code: 'moscow', selected: false},
    {name: 'Другие города РФ', code: 'other', selected: false},

])
const exchangeOffers = ref([
    {name: 'USDT на AED', code: 'usdt_aed', exchangeRate: 'до 3.674'},
    {name: 'AED на USDT', code: 'aed_usdt', exchangeRate: 'до 3.6668'},
    {name: 'USDT на USD', code: 'usdt_usd', exchangeRate: 'до 1'},
    {name: 'USD на USDT', code: 'usd_usdt', exchangeRate: 'до 1.012'},
    {name: 'USD на AED', code: 'usd_aed', exchangeRate: 'до 3.643'},
    {name: 'AED на USD', code: 'aed_usd', exchangeRate: 'до 3.672'},
    {name: 'RUB(card) на AED', code: 'rub_card', exchangeRate: 'до 28.878'},
    {name: 'Менеджер-чеки', code: 'check', exchangeRate: null},
    {name: 'Переводы', code: 'transfer', exchangeRate: null},
])
const menu = ref([
    {name: 'Обменять валюты'},
    {name: 'История услуг'},
    {name: 'Связаться с менеджером'},
    {name: 'Курсы'},
    {name: 'Реферал'},
    {name: 'Наши услуги'},
    
])
const changeStep = (step: StepType, fn = () => {
}) => {
    currentStep.value = step
    setMainButtonParams({text: mainBtnText.value})
    fn()
}
const setLang = (lang) => {
    useGeneralStore().setLang(lang)
    setMainButtonParams({text:`${lang.name} →  Далее`})
    showMainButton()
}

const setCity = (city, index) => {
    selectedCity.value = city
    cities.value.forEach((el) => el.selected = false)
    cities.value[index].selected = true
    setMainButtonParams({text: mainBtnText.value})
    showMainButton()
}
const mainBtnText = computed(() => {
    switch (currentStep.value) {
        case 'lang':
            return `${selectedLang?.value?.name}  →  Далее`;
        case 'city':
            return `${selectedCity?.value?.name}  →  Далее`;
    }
})
const backStep = computed(() => {
    switch (currentStep.value) {
        case 'lang':
            return;
        case 'city':
            return 'lang';
        case 'menu':
            return 'city';
    }
})
const nextStep = computed(() => {
    switch (currentStep.value) {
        case 'lang':
            return 'city';
        case 'city':
            return 'menu';
    }
})

// const testIsVisible = ref(false)
// const test = () => {
//     testIsVisible.value = !testIsVisible.value
// }
const { version, platform, initData, initDataUnsafe, sendData } = useWebApp()
// const { expand, isExpanded, viewportHeight, viewportStableHeight } = useWebAppViewport()
// const { openLink, openTelegramLink, switchInlineQuery } = useWebAppNavigation()
const { showConfirm, showAlert, showPopup } = useWebAppPopup()
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
// const { colorScheme, themeParams, headerColor, backgroundColor } = useWebAppTheme()
const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()
// const { showScanQrPopup } = useWebAppQrScanner()
//
const toggleMainButton = () => {
    computedMainButtonVisible.value
        ? hideMainButton()
        : showMainButton()
}
const computedMainButtonVisible = computed(() => {
    if (
        !isMainButtonVisible.value ||
        isMainButtonActive.value && currentStep.value === 'lang' && !selectedLang.value ||
        isMainButtonActive.value && currentStep.value === 'city' && !selectedCity.value ||
        currentStep.value === 'menu'
    ) {
      return false
    } else {
      return true
    }
    
})

// function toggleMainButtonProgress() {
//     isMainButtonProgressVisible.value
//         ? hideMainButtonProgress()
//         : showMainButtonProgress(true)
// }
</script>

<style lang="scss">

</style>

