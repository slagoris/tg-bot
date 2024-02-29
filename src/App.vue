<template>
  <!--    <div>Выбранный язык: {{selectedLang}}</div>-->
  <!--    <div>Выбранный город: {{selectedCity}}</div>-->
  <!--    <div>main button comp isVisible: {{computedMainButtonVisible}}</div>-->
  <!--    <div>main isVisible: {{isMainButtonVisible}}</div>-->
    <div v-if="computedMainButtonVisible">
        <tg-main-button @click="changeStep(nextStep)"/>
    </div>
    <section v-if="currentStep === 'lang'">
        <div style="width: 100%; margin-bottom: 30px; max-height: 568px">
            <img src="/public/images/lang-ru.jpg" alt="logo 7gg" width="100%">
        </div>
        <h1>Выберите язык</h1>
        <ul>
            <li v-for="(lang, index) in langs">
                <button @click="setLang(lang, index)" :class="{active: lang.selected}">
                    <span v-text="lang?.name"/>
                    <span v-text="lang?.flag" style="margin-left: 10px;"/>
                </button>
            </li>
        </ul>
        <button @click="toggleMainButton">ТОГЛ ГЛАВНОЙ КНОПКИ</button>
    </section>

    <section v-if="currentStep === 'city'">
        <tg-back-button @click="changeStep(backStep)"/>
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
        <button @click="toggleMainButton">ТОГЛ ГЛАВНОЙ КНОПКИ</button>
    </section>

    <section v-if="currentStep === 'menu'">
        <div style="width: 100%; margin-bottom: 30px; max-height: 568px">
            <img src="/public/images/greet-ru.jpg" alt="logo 7gg" width="100%">
        </div>
        <h1> {{ initDataUnsafe.user }} Добро пожаловать в 7GG 🤝</h1>
        <ul>
            <li>💠 Первый в мире обменный пункт, который делится прибылью со своими клиентами💰</li>
            <li>💠 Самые выгодные курсы на покупку/продажу валюты, криптовалюты, менеджер-чеков</li>
            <li>💠 Быстрый, безопасный обмен USDT, RUB, AED, USD в офисах компании или с доставкой</li>
        </ul>
        <ul class="exchange-offers">
            <li class="exchange-offers__item" v-for="offer in exchangeOffers">
                {{ offer.name }} {{ offer.exchangeRate }}
            </li>
        </ul>
        <ul class="menu">
            <li class="menu__item" v-for="item in menu">
                <button>{{item.name}}</button>
            </li>
        </ul>
<!--        <button @click="toggleMainButton">ТОГЛ ГЛАВНОЙ КНОПКИ</button>-->
    </section>


  <!--    <tg-main-button  @click="router.back()"/>-->
  <!--    <section>-->
  <!--        <tg-main-button  />-->
  <!--        <button @click.prevent="sendData('Hello, World!')">-->
  <!--            Send «Hello, World!»-->
  <!--        </button>-->
  <!--    </section>-->

  <!--    <section>-->
  <!--        <div>-->
  <!--            <h4>Main Button:</h4>-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                isMainButtonActive: {{ isMainButtonActive }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                isMainButtonVisible: {{ isMainButtonVisible }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                isMainButtonProgressVisible: {{ isMainButtonProgressVisible }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                mainButtonText: {{ mainButtonText }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                mainButtonColor: {{ mainButtonColor }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                mainButtonTextColor: {{ mainButtonTextColor }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->

  <!--            <button @click.prevent="toggleMainButton">Toggle Main Button</button>-->
  <!--            <button @click.prevent="toggleMainButtonProgress">Toggle Main Button Progress</button>-->
  <!--            <button @click.prevent="setMainButtonParams({-->
  <!--            text: 'DONE', color: '#000',text_color: '#e6e6e6',})">-->
  <!--                Update Main Button-->
  <!--            </button>-->
  <!--        </div>-->

  <!--        <div>-->
  <!--            <h4>Viewport:</h4>-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                Viewport height: {{ viewportHeight }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                Viewport stable height: {{ viewportStableHeight }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <p>&ndash;&gt;-->
  <!--            &lt;!&ndash;                Expanded: {{ isExpanded }}&ndash;&gt;-->
  <!--            &lt;!&ndash;            </p>&ndash;&gt;-->

  <!--            <button @click.prevent="expand()">-->
  <!--                Expand Viewport-->
  <!--            </button>-->
  <!--        </div>-->

  <!--        <div>-->
  <!--            <h4>Navigation:</h4>-->
  <!--            <ul>-->
  <!--                <li>-->
  <!--                    <a href="?nextpage=1">Regular link</a> (opens inside webview)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="https://telegram.org/" target="_blank">target="_blank" link</a> (opens outside webview)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="javascript:window.open('https://telegram.org/');">window.open() link</a> (opens outside webview)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="https://t.me/like">LikeBot t.me link</a> (opens inside Telegram app)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent="openTelegramLink('https://t.me/vote');">openTelegramLink()</a> (opens inside Telegram app)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent=" openLink('https://google.com/'); ">openLink()</a> (opens outside webview)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent=" openLink('https://telegra.ph/api', { try_instant_view: true }); ">openLink({try_instant_view:true})</a>(opens IV inside Telegram app)-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent=" switchInlineQuery('query'); ">switchInlineQuery('query')</a>(opens inline query inside Telegram app)-->
  <!--                </li>-->
  <!--            </ul>-->
  <!--        </div>-->

  <!--        <div>-->
  <!--            <h4>Popups:</h4>-->
  <!--            <ul>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent="showAlert('Hello!');">showAlert</a>-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent="showConfirm('Are you sure?');">showConfirm</a>-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent="showPopup({message: 'Hello!'});">showPopup</a>-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    <a href="#" @click.prevent="showScanQrPopup({text: 'Test'})">showScanQrPopup</a>-->
  <!--                </li>-->
  <!--            </ul>-->
  <!--        </div>-->

  <!--        <div>-->
  <!--            <h4>Haptics:</h4>-->
  <!--            <ul>-->
  <!--                <li>Impact: <a href="#"-->
  <!--                               @click.prevent="impactOccurred('heavy');"-->
  <!--                >heavy</a>, &nbsp; <a-->
  <!--                    href="#"-->
  <!--                    @click.prevent="impactOccurred('light');"-->
  <!--                >light</a>, &nbsp; <a-->
  <!--                    href="#"-->
  <!--                    @click.prevent="impactOccurred('medium');"-->
  <!--                >medium</a>, &nbsp; <a-->
  <!--                    href="#"-->
  <!--                    @click.prevent="impactOccurred('rigid');"-->
  <!--                >rigid</a>, &nbsp; <a-->
  <!--                    href="#"-->
  <!--                    @click.prevent="impactOccurred('soft');"-->
  <!--                >soft</a><br><br>-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    Notification: <a-->
  <!--                    href="#" @click.prevent="notificationOccurred('error');"-->
  <!--                >error</a>,-->
  <!--                    &nbsp; <a-->
  <!--                    href="#" @click.prevent="notificationOccurred('success');"-->
  <!--                >success</a>, &nbsp; <a-->
  <!--                    href="#"-->
  <!--                    @click.prevent="notificationOccurred('warning');"-->
  <!--                >warning</a><br><br>-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                    Selection: <a-->
  <!--                    href="#" @click.prevent="selectionChanged();"-->
  <!--                >changed</a><br><br>-->
  <!--                </li>-->
  <!--            </ul>-->
  <!--        </div>-->

<!--          <div>-->
<!--              <h4>Data passed</h4>-->
<!--              <h5>initData</h5>-->
<!--              {{ initData }}-->
<!--              <h5>initDataUnsafe</h5>-->
<!--              {{ initDataUnsafe.user }}-->
<!--          </div>-->
<!--          <div>-->
  <!--            <h4>Theme params</h4>-->
  <!--            <div class="sect_row">-->
  <!--                Color scheme: {{ colorScheme }}-->
  <!--            </div>-->
  <!--            <div class="sect_row">-->
  <!--                Header:-->
  <!--                <select >-->
  <!--                    <option :selected="headerColor === themeParams.bg_color ">-->
  <!--                        bg_color ({{ headerColor }})-->
  <!--                    </option>-->
  <!--                    <option :selected="headerColor === themeParams.secondary_bg_color ">-->
  <!--                        secondary_bg_color ({{ headerColor }})-->
  <!--                    </option>-->
  <!--                </select>-->
  <!--            </div>-->
  <!--            <div class="sect_row">-->
  <!--                Background:-->
  <!--                <select >-->
  <!--                    <option :selected="backgroundColor === themeParams.bg_color ">-->
  <!--                        bg_color ({{ backgroundColor }})-->
  <!--                    </option>-->
  <!--                    <option :selected="backgroundColor === themeParams.secondary_bg_color ">-->
  <!--                        secondary_bg_color ({{ backgroundColor }})-->
  <!--                    </option>-->
  <!--                </select>-->
  <!--            </div>-->

  <!--            <pre><code>{{ themeParams }}</code></pre>-->
  <!--        </div>-->

  <!--        <div>-->
  <!--            Version: {{ version }}-->
  <!--            <br>-->
  <!--            Platform: {{ platform }}-->
  <!--        </div>-->
  <!--    </section>-->
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
} from './composables'
import {computed, onMounted, ref} from "vue";

onMounted(() => {
    // hideMainButton()
})
type StepType = 'lang' | 'city' | 'menu' | undefined
const currentStep = ref<StepType>('lang')
const selectedLang = ref()
const selectedCity = ref()
const langs = ref([
    {name: 'Русский', flag: '🇷🇺', code: 'ru', selected: false},
    {name: 'English', flag: '🇬🇧', code: 'en', selected: false},
    {name: 'Chinese', flag: '🇨🇳', code: 'ch', selected: false},
])
const cities = ref([
    {name: 'Дубай', code: 'dubai', selected: false},
    {name: 'Москва', code: 'moscow', selected: false},
    {name: 'Другие города РФ', code: 'other', selected: false},

])
const exchangeOffers = ref([
    {name: 'USDT на AED', exchangeRate: 'до 3.674'},
    {name: 'AED на USDT', exchangeRate: 'до 3.6668'},
    {name: 'USDT на USD', exchangeRate: 'до 1'},
    {name: 'USD на USDT', exchangeRate: 'до 1.012'},
    {name: 'USD на AED', exchangeRate: 'до 3.643'},
    {name: 'AED на USD', exchangeRate: 'до 3.672'},
    {name: 'RUB(card) на AED', exchangeRate: 'до 28.878'},
    {name: 'Менеджер-чеки', exchangeRate: null},
    {name: 'Переводы', exchangeRate: null},
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
const setLang = (lang, index) => {
    selectedLang.value = lang
    langs.value.forEach((el) => el.selected = false)
    langs.value[index].selected = true
    setMainButtonParams({text: mainBtnText.value})
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
// const { showConfirm, showAlert, showPopup } = useWebAppPopup()
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
// const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()
// const { showScanQrPopup } = useWebAppQrScanner()
//
const toggleMainButton = () => {
    computedMainButtonVisible.value
        ? hideMainButton()
        : showMainButton()
}
const computedMainButtonVisible = computed(() => {
    return !(!isMainButtonVisible.value ||
        isMainButtonActive.value && currentStep.value === 'lang' && !selectedLang.value ||
        isMainButtonActive.value && currentStep.value === 'city' && !selectedCity.value)
})

// function toggleMainButtonProgress() {
//     isMainButtonProgressVisible.value
//         ? hideMainButtonProgress()
//         : showMainButtonProgress(true)
// }
</script>

<style lang="scss">
button {
  &.active {
    background: linear-gradient(230deg, rgb(223 183 25) 0%, rgb(213 174 71) 15%);
  }
}

.exchange-offers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3px;

  &__item {
      
      text-align: center;
    padding: 10px;
      background: darkgray;

      &:nth-child(7) {
          grid-column: 1 / 3;
      }
  }
}
.menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
    button {
        margin: 0;
        border-radius: 4px;
        height: 100%;
    }
}
</style>

