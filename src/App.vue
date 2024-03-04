<template>
  <router-view />
  {{useGeneralStore()}}
</template>
<script setup lang="ts">

import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useGeneralStore} from "./stores/general.ts";
const route = useRoute()
const router = useRouter()

onMounted(() => {
    if (route.path === '/') {
        router.push('/')
    }
})
</script>
<!--<template>-->
<!--  &lt;!&ndash;    <div>Выбранный язык: {{selectedLang}}</div>&ndash;&gt;-->
<!--  &lt;!&ndash;    <div>Выбранный город: {{selectedCity}}</div>&ndash;&gt;-->
<!--  &lt;!&ndash;    <div>main button comp isVisible: {{computedMainButtonVisible}}</div>&ndash;&gt;-->
<!--  &lt;!&ndash;    <div>main isVisible: {{isMainButtonVisible}}</div>&ndash;&gt;-->
<!--    <div v-if="computedMainButtonVisible">-->
<!--        <tg-main-button @click="changeStep(nextStep)"/>-->
<!--    </div>-->
<!--    <section v-if="currentStep === 'lang'">-->
<!--        <div style="width: 100%; margin-bottom: 30px; max-height: 568px">-->
<!--            <img src="/public/images/lang-ru.jpg" alt="logo 7gg" width="100%">-->
<!--        </div>-->
<!--        <h1>Выберите язык</h1>-->
<!--        <ul>-->
<!--            <li v-for="(lang, index) in langs">-->
<!--                <button @click="setLang(lang, index)" :class="{active: lang.selected}">-->
<!--                    <span v-text="lang?.name"/>-->
<!--                    <span v-text="lang?.flag" style="margin-left: 10px;"/>-->
<!--                </button>-->
<!--            </li>-->
<!--        </ul>-->
<!--        <button @click="toggleMainButton">ТОГЛ ГЛАВНОЙ КНОПКИ</button>-->
<!--    </section>-->

<!--    <section v-if="currentStep === 'city'">-->
<!--        <tg-back-button @click="changeStep(backStep)"/>-->
<!--        <div style="width: 100%; margin-bottom: 30px;">-->
<!--            <img src="/public/images/Logo7Gates-gold.svg" alt="logo 7gg"-->
<!--                 style="margin-bottom: 30px; height: 100%; max-height: 100px">-->
<!--        </div>-->
<!--        <h1>Выберите город</h1>-->
<!--        <ul>-->
<!--            <li v-for="(city, index) in cities">-->
<!--                <button @click="setCity(city, index)" :class="{active: city.selected}">{{ city.name }}</button>-->
<!--            </li>-->
<!--        </ul>-->
<!--        <button @click="toggleMainButton">ТОГЛ ГЛАВНОЙ КНОПКИ</button>-->
<!--    </section>-->

<!--    <section v-if="currentStep === 'menu'">-->
<!--        <tg-back-button @click="changeStep(backStep)"/>-->
<!--        <div style="width: 100%; margin-bottom: 30px; max-height: 568px">-->
<!--            <img src="/public/images/greet-ru.jpg" alt="menu 7gg" width="100%">-->
<!--        </div>-->
<!--        <h1> <span>@{{ initDataUnsafe.user.username }}, </span>Добро пожаловать в 7GG 🤝</h1>-->
<!--        <ul>-->
<!--            <li>💠 Первый в мире обменный пункт, который делится прибылью со своими клиентами💰</li>-->
<!--            <li>💠 Самые выгодные курсы на покупку/продажу валюты, криптовалюты, менеджер-чеков</li>-->
<!--            <li>💠 Быстрый, безопасный обмен USDT, RUB, AED, USD в офисах компании или с доставкой</li>-->
<!--        </ul>-->
<!--        <ul class="exchange-offers">-->
<!--            <li class="exchange-offers__item" v-for="offer in exchangeOffers" -->
<!--                @click.prevent="showAlert(`${offer.name} ${offer.exchangeRate}`);"-->
<!--            >-->
<!--                {{ offer.name }} {{ offer.exchangeRate }}-->
<!--            </li>-->
<!--        </ul>-->
<!--        <ul class="menu">-->
<!--            <li class="menu__item" v-for="item in menu">-->
<!--                <button @click.prevent="showAlert(`${item.name}`);">{{item.name}}</button>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </section>-->

<!--    <section v-if="currentStep === 'exchange'">-->
<!--        <tg-back-button @click="changeStep(backStep)"/>-->
<!--        <div style="width: 100%; margin-bottom: 30px; max-height: 568px">-->
<!--            <img src="/public/images/exchange-ru.jpg" alt="exchange 7gg" width="100%">-->
<!--        </div>-->
<!--        <h1> <span>@{{ initDataUnsafe.user.username }}, </span>Добро пожаловать в 7GG 🤝</h1>-->
<!--        <ul>-->
<!--            <li>💠 Первый в мире обменный пункт, который делится прибылью со своими клиентами💰</li>-->
<!--            <li>💠 Самые выгодные курсы на покупку/продажу валюты, криптовалюты, менеджер-чеков</li>-->
<!--            <li>💠 Быстрый, безопасный обмен USDT, RUB, AED, USD в офисах компании или с доставкой</li>-->
<!--        </ul>-->
<!--        <ul class="exchange-offers">-->
<!--            <li class="exchange-offers__item" v-for="offer in exchangeOffers"-->
<!--                @click.prevent="showAlert(`${offer.name} ${offer.exchangeRate}`);"-->
<!--            >-->
<!--                {{ offer.name }} {{ offer.exchangeRate }}-->
<!--            </li>-->
<!--        </ul>-->
<!--        <ul class="menu">-->
<!--            <li class="menu__item" v-for="item in menu">-->
<!--                <button @click.prevent="showAlert(`${item.name}`);">{{item.name}}</button>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </section>-->


<!--  &lt;!&ndash;    <tg-main-button  @click="router.back()"/>&ndash;&gt;-->
<!--  &lt;!&ndash;    <section>&ndash;&gt;-->
<!--  &lt;!&ndash;        <tg-main-button  />&ndash;&gt;-->
<!--  &lt;!&ndash;        <button @click.prevent="sendData('Hello, World!')">&ndash;&gt;-->
<!--  &lt;!&ndash;            Send «Hello, World!»&ndash;&gt;-->
<!--  &lt;!&ndash;        </button>&ndash;&gt;-->
<!--  &lt;!&ndash;    </section>&ndash;&gt;-->

<!--  &lt;!&ndash;    <section>&ndash;&gt;-->
<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <h4>Main Button:</h4>&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                isMainButtonActive: {{ isMainButtonActive }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                isMainButtonVisible: {{ isMainButtonVisible }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                isMainButtonProgressVisible: {{ isMainButtonProgressVisible }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                mainButtonText: {{ mainButtonText }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                mainButtonColor: {{ mainButtonColor }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                mainButtonTextColor: {{ mainButtonTextColor }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->

<!--  &lt;!&ndash;            <button @click.prevent="toggleMainButton">Toggle Main Button</button>&ndash;&gt;-->
<!--  &lt;!&ndash;            <button @click.prevent="toggleMainButtonProgress">Toggle Main Button Progress</button>&ndash;&gt;-->
<!--  &lt;!&ndash;            <button @click.prevent="setMainButtonParams({&ndash;&gt;-->
<!--  &lt;!&ndash;            text: 'DONE', color: '#000',text_color: '#e6e6e6',})">&ndash;&gt;-->
<!--  &lt;!&ndash;                Update Main Button&ndash;&gt;-->
<!--  &lt;!&ndash;            </button>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->

<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <h4>Viewport:</h4>&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                Viewport height: {{ viewportHeight }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                Viewport stable height: {{ viewportStableHeight }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            <p>&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;                Expanded: {{ isExpanded }}&ndash;&gt;&ndash;&gt;-->
<!--  &lt;!&ndash;            &lt;!&ndash;            </p>&ndash;&gt;&ndash;&gt;-->

<!--  &lt;!&ndash;            <button @click.prevent="expand()">&ndash;&gt;-->
<!--  &lt;!&ndash;                Expand Viewport&ndash;&gt;-->
<!--  &lt;!&ndash;            </button>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->

<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <h4>Navigation:</h4>&ndash;&gt;-->
<!--  &lt;!&ndash;            <ul>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="?nextpage=1">Regular link</a> (opens inside webview)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="https://telegram.org/" target="_blank">target="_blank" link</a> (opens outside webview)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="javascript:window.open('https://telegram.org/');">window.open() link</a> (opens outside webview)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="https://t.me/like">LikeBot t.me link</a> (opens inside Telegram app)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent="openTelegramLink('https://t.me/vote');">openTelegramLink()</a> (opens inside Telegram app)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent=" openLink('https://google.com/'); ">openLink()</a> (opens outside webview)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent=" openLink('https://telegra.ph/api', { try_instant_view: true }); ">openLink({try_instant_view:true})</a>(opens IV inside Telegram app)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent=" switchInlineQuery('query'); ">switchInlineQuery('query')</a>(opens inline query inside Telegram app)&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;            </ul>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->

<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <h4>Popups:</h4>&ndash;&gt;-->
<!--  &lt;!&ndash;            <ul>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent="showAlert('Hello!');">showAlert</a>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent="showConfirm('Are you sure?');">showConfirm</a>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent="showPopup({message: 'Hello!'});">showPopup</a>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <a href="#" @click.prevent="showScanQrPopup({text: 'Test'})">showScanQrPopup</a>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;            </ul>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->

<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <h4>Haptics:</h4>&ndash;&gt;-->
<!--  &lt;!&ndash;            <ul>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>Impact: <a href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                               @click.prevent="impactOccurred('heavy');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >heavy</a>, &nbsp; <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                    @click.prevent="impactOccurred('light');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >light</a>, &nbsp; <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                    @click.prevent="impactOccurred('medium');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >medium</a>, &nbsp; <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                    @click.prevent="impactOccurred('rigid');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >rigid</a>, &nbsp; <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                    @click.prevent="impactOccurred('soft');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >soft</a><br><br>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    Notification: <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#" @click.prevent="notificationOccurred('error');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >error</a>,&ndash;&gt;-->
<!--  &lt;!&ndash;                    &nbsp; <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#" @click.prevent="notificationOccurred('success');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >success</a>, &nbsp; <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                    @click.prevent="notificationOccurred('warning');"&ndash;&gt;-->
<!--  &lt;!&ndash;                >warning</a><br><br>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;                <li>&ndash;&gt;-->
<!--  &lt;!&ndash;                    Selection: <a&ndash;&gt;-->
<!--  &lt;!&ndash;                    href="#" @click.prevent="selectionChanged();"&ndash;&gt;-->
<!--  &lt;!&ndash;                >changed</a><br><br>&ndash;&gt;-->
<!--  &lt;!&ndash;                </li>&ndash;&gt;-->
<!--  &lt;!&ndash;            </ul>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->

<!--&lt;!&ndash;          <div>&ndash;&gt;-->
<!--&lt;!&ndash;              <h4>Data passed</h4>&ndash;&gt;-->
<!--&lt;!&ndash;              <h5>initData</h5>&ndash;&gt;-->
<!--&lt;!&ndash;              {{ initData }}&ndash;&gt;-->
<!--&lt;!&ndash;              <h5>initDataUnsafe</h5>&ndash;&gt;-->
<!--&lt;!&ndash;              {{ initDataUnsafe.user }}&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <h4>Theme params</h4>&ndash;&gt;-->
<!--  &lt;!&ndash;            <div class="sect_row">&ndash;&gt;-->
<!--  &lt;!&ndash;                Color scheme: {{ colorScheme }}&ndash;&gt;-->
<!--  &lt;!&ndash;            </div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <div class="sect_row">&ndash;&gt;-->
<!--  &lt;!&ndash;                Header:&ndash;&gt;-->
<!--  &lt;!&ndash;                <select >&ndash;&gt;-->
<!--  &lt;!&ndash;                    <option :selected="headerColor === themeParams.bg_color ">&ndash;&gt;-->
<!--  &lt;!&ndash;                        bg_color ({{ headerColor }})&ndash;&gt;-->
<!--  &lt;!&ndash;                    </option>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <option :selected="headerColor === themeParams.secondary_bg_color ">&ndash;&gt;-->
<!--  &lt;!&ndash;                        secondary_bg_color ({{ headerColor }})&ndash;&gt;-->
<!--  &lt;!&ndash;                    </option>&ndash;&gt;-->
<!--  &lt;!&ndash;                </select>&ndash;&gt;-->
<!--  &lt;!&ndash;            </div>&ndash;&gt;-->
<!--  &lt;!&ndash;            <div class="sect_row">&ndash;&gt;-->
<!--  &lt;!&ndash;                Background:&ndash;&gt;-->
<!--  &lt;!&ndash;                <select >&ndash;&gt;-->
<!--  &lt;!&ndash;                    <option :selected="backgroundColor === themeParams.bg_color ">&ndash;&gt;-->
<!--  &lt;!&ndash;                        bg_color ({{ backgroundColor }})&ndash;&gt;-->
<!--  &lt;!&ndash;                    </option>&ndash;&gt;-->
<!--  &lt;!&ndash;                    <option :selected="backgroundColor === themeParams.secondary_bg_color ">&ndash;&gt;-->
<!--  &lt;!&ndash;                        secondary_bg_color ({{ backgroundColor }})&ndash;&gt;-->
<!--  &lt;!&ndash;                    </option>&ndash;&gt;-->
<!--  &lt;!&ndash;                </select>&ndash;&gt;-->
<!--  &lt;!&ndash;            </div>&ndash;&gt;-->

<!--  &lt;!&ndash;            <pre><code>{{ themeParams }}</code></pre>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->

<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;            Version: {{ version }}&ndash;&gt;-->
<!--  &lt;!&ndash;            <br>&ndash;&gt;-->
<!--  &lt;!&ndash;            Platform: {{ platform }}&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->
<!--  &lt;!&ndash;    </section>&ndash;&gt;-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {-->
<!--    useWebApp,-->
<!--    useWebAppHapticFeedback,-->
<!--    useWebAppMainButton,-->
<!--    useWebAppNavigation,-->
<!--    useWebAppPopup,-->
<!--    useWebAppQrScanner,-->
<!--    useWebAppTheme,-->
<!--    useWebAppViewport-->
<!--} from './composables'-->
<!--import {computed, onMounted, ref} from "vue";-->

<!--onMounted(() => {-->
<!--    // hideMainButton()-->
<!--})-->
<!--type StepType = 'lang' | 'city' | 'menu' | 'exchange' | undefined-->
<!--const currentStep = ref<StepType>('lang')-->
<!--const selectedLang = ref()-->
<!--const selectedCity = ref()-->
<!--const langs = ref([-->
<!--    {name: 'Русский', flag: '🇷🇺', code: 'ru', selected: false},-->
<!--    {name: 'English', flag: '🇬🇧', code: 'en', selected: false},-->
<!--    {name: 'Chinese', flag: '🇨🇳', code: 'ch', selected: false},-->
<!--])-->
<!--const cities = ref([-->
<!--    {name: 'Дубай', code: 'dubai', selected: false},-->
<!--    {name: 'Москва', code: 'moscow', selected: false},-->
<!--    {name: 'Другие города РФ', code: 'other', selected: false},-->

<!--])-->
<!--const exchangeOffers = ref([-->
<!--    {name: 'USDT на AED', exchangeRate: 'до 3.674'},-->
<!--    {name: 'AED на USDT', exchangeRate: 'до 3.6668'},-->
<!--    {name: 'USDT на USD', exchangeRate: 'до 1'},-->
<!--    {name: 'USD на USDT', exchangeRate: 'до 1.012'},-->
<!--    {name: 'USD на AED', exchangeRate: 'до 3.643'},-->
<!--    {name: 'AED на USD', exchangeRate: 'до 3.672'},-->
<!--    {name: 'RUB(card) на AED', exchangeRate: 'до 28.878'},-->
<!--    {name: 'Менеджер-чеки', exchangeRate: null},-->
<!--    {name: 'Переводы', exchangeRate: null},-->
<!--])-->
<!--const menu = ref([-->
<!--    {name: 'Обменять валюты'},-->
<!--    {name: 'История услуг'},-->
<!--    {name: 'Связаться с менеджером'},-->
<!--    {name: 'Курсы'},-->
<!--    {name: 'Реферал'},-->
<!--    {name: 'Наши услуги'},-->
<!--    -->
<!--])-->
<!--const changeStep = (step: StepType, fn = () => {-->
<!--}) => {-->
<!--    currentStep.value = step-->
<!--    setMainButtonParams({text: mainBtnText.value})-->
<!--    fn()-->
<!--}-->
<!--const setLang = (lang, index) => {-->
<!--    selectedLang.value = lang-->
<!--    langs.value.forEach((el) => el.selected = false)-->
<!--    langs.value[index].selected = true-->
<!--    setMainButtonParams({text: mainBtnText.value})-->
<!--    showMainButton()-->
<!--}-->

<!--const setCity = (city, index) => {-->
<!--    selectedCity.value = city-->
<!--    cities.value.forEach((el) => el.selected = false)-->
<!--    cities.value[index].selected = true-->
<!--    setMainButtonParams({text: mainBtnText.value})-->
<!--    showMainButton()-->
<!--}-->
<!--const mainBtnText = computed(() => {-->
<!--    switch (currentStep.value) {-->
<!--        case 'lang':-->
<!--            return `${selectedLang?.value?.name}  →  Далее`;-->
<!--        case 'city':-->
<!--            return `${selectedCity?.value?.name}  →  Далее`;-->
<!--    }-->
<!--})-->
<!--const backStep = computed(() => {-->
<!--    switch (currentStep.value) {-->
<!--        case 'lang':-->
<!--            return;-->
<!--        case 'city':-->
<!--            return 'lang';-->
<!--        case 'menu':-->
<!--            return 'city';-->
<!--    }-->
<!--})-->
<!--const nextStep = computed(() => {-->
<!--    switch (currentStep.value) {-->
<!--        case 'lang':-->
<!--            return 'city';-->
<!--        case 'city':-->
<!--            return 'menu';-->
<!--    }-->
<!--})-->

<!--// const testIsVisible = ref(false)-->
<!--// const test = () => {-->
<!--//     testIsVisible.value = !testIsVisible.value-->
<!--// }-->
<!--const { version, platform, initData, initDataUnsafe, sendData } = useWebApp()-->
<!--// const { expand, isExpanded, viewportHeight, viewportStableHeight } = useWebAppViewport()-->
<!--// const { openLink, openTelegramLink, switchInlineQuery } = useWebAppNavigation()-->
<!--const { showConfirm, showAlert, showPopup } = useWebAppPopup()-->
<!--const {-->
<!--    showMainButton,-->
<!--    hideMainButton,-->
<!--    showMainButtonProgress,-->
<!--    hideMainButtonProgress,-->
<!--    mainButtonText,-->
<!--    mainButtonColor,-->
<!--    mainButtonTextColor,-->
<!--    isMainButtonActive,-->
<!--    isMainButtonVisible,-->
<!--    isMainButtonProgressVisible,-->
<!--    setMainButtonParams,-->
<!--} = useWebAppMainButton()-->
<!--// const { colorScheme, themeParams, headerColor, backgroundColor } = useWebAppTheme()-->
<!--// const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()-->
<!--// const { showScanQrPopup } = useWebAppQrScanner()-->
<!--//-->
<!--const toggleMainButton = () => {-->
<!--    computedMainButtonVisible.value-->
<!--        ? hideMainButton()-->
<!--        : showMainButton()-->
<!--}-->
<!--const computedMainButtonVisible = computed(() => {-->
<!--    if (-->
<!--        !isMainButtonVisible.value ||-->
<!--        isMainButtonActive.value && currentStep.value === 'lang' && !selectedLang.value ||-->
<!--        isMainButtonActive.value && currentStep.value === 'city' && !selectedCity.value ||-->
<!--        currentStep.value === 'menu'-->
<!--    ) {-->
<!--      return false-->
<!--    } else {-->
<!--      return true-->
<!--    }-->
<!--    -->
<!--})-->

<!--// function toggleMainButtonProgress() {-->
<!--//     isMainButtonProgressVisible.value-->
<!--//         ? hideMainButtonProgress()-->
<!--//         : showMainButtonProgress(true)-->
<!--// }-->
<!--</script>-->

<!--<style lang="scss">-->
<!--button {-->
<!--  &.active {-->
<!--    background: linear-gradient(230deg, rgb(223 183 25) 0%, rgb(213 174 71) 15%);-->
<!--  }-->
<!--}-->

<!--.exchange-offers {-->
<!--  display: grid;-->
<!--  grid-template-columns: repeat(2, 1fr);-->
<!--  grid-gap: 3px;-->

<!--  &__item {-->
<!--      -->
<!--      text-align: center;-->
<!--    padding: 10px;-->
<!--      background: darkgray;-->

<!--      &:nth-child(7) {-->
<!--          grid-column: 1 / 3;-->
<!--      }-->
<!--  }-->
<!--}-->
<!--.menu {-->
<!--    display: grid;-->
<!--    grid-template-columns: repeat(3, 1fr);-->
<!--    grid-gap: 3px;-->
<!--    button {-->
<!--        margin: 0;-->
<!--        border-radius: 4px;-->
<!--        height: 100%;-->
<!--    }-->
<!--}-->
<!--</style>-->

