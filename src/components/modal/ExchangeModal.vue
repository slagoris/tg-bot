<template>
    <div class="exchange-modal">
        <div>Обратите внимание!<br>
            Курс зависит от суммы, чем больше сумма продажи, тем выгоднее курс.
            <b>{{ pair?.name }}</b>
            <div>🥉От 1,000$ до 5,000$ -  94.152 RUB</div>
            <div>🥈От 5,001$ до 15,000$ -  93.966 RUB</div>
            <div> 🥇От 15,001$ и выше -  93.687 RUB</div>
        </div>
        
        <Dropdown v-model="pair" placeholder="Выберите пару для обмена" :options="exchangeOffers" option-label="name" @change="selectionChanged()" />
        <Dropdown v-if="pair" v-model="way" placeholder="Выберите способ" :options="pair.cur" @change="selectionChanged()">
            <template #option="{option}">
                Ввести сумму {{ option }}
            </template>
            <template #value="{value}">
                <span v-if="value">
                    Ввести сумму {{ value }}
                </span>
                <span v-else>
                    Выберите способ
                </span>
            </template>
        </Dropdown>
        <InputText v-if="way" v-model="sum" type="number" min="100" step="100"  :placeholder="`Сумма ${way}`" @input="impactOccurred('soft')"/>
        <div v-if="way && sum > 0 && walletIsVisible && pair.cur.includes('USDT')">
            <InputText v-model="wallet" placeholder="Введите адрес вашего USDT-кошелька" style="width: 100%;" @input="impactOccurred('soft')"/>
            <Button label="Пропустить ввод кошелька"  @click="walletIsVisible = false; wallet = ''"/>
        </div>
        <Button :disabled="!pair || !way || !sum" label="Подтвердить" style="margin-top: 30px;" @click="finishExchange()"/>
        <tg-main-button v-if="pair && way && sum" @click="showConfirm(`
        Вы действительно хотите обменять: ${sum} ${way}
         По курсу: ${pair.exchangeRate}. 
         Вы отдаете ХХХ, 
         Вы получаете XXXX,
         
         После создания заявки курс фиксируется на 1 час(-а)`, (ok: boolean) => ok ? finishExchange() : null)"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useWebApp, useWebAppHapticFeedback, useWebAppMainButton, useWebAppPopup, useWebAppNavigation} from "../../composables";
const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()
const { openLink, openTelegramLink, switchInlineQuery } = useWebAppNavigation()
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

onMounted(() => {
    setMainButtonParams({text: 'Обменять' || ''})
})
const emit = defineEmits(['close'])
const pair = ref()
const way = ref()
const sum = ref(null)
const wallet = ref('')
const walletIsVisible = ref(true)
const exchangeRates = ref([
    {code: 'usdt_aed', exchangeRate: 3.674},
    {code: 'aed_usdt', exchangeRate: 3.6668},
    {code: 'usdt_usd', exchangeRate: 1},
    {code: 'usd_usdt', exchangeRate: 1.012},
    {code: 'usd_aed', exchangeRate: 3.643},
    {code: 'aed_usd', exchangeRate: 3.672},
    {code: 'rub_card', exchangeRate: 28.878},
    {code: 'check', exchangeRate: null},
    {code: 'transfer', exchangeRate: null},
])

const exchangeOffers = ref([
    {name: 'USDT на AED', cur: ['USDT', 'AED'], code: 10, exchangeRate: 3.674},
    {name: 'AED на USDT', cur: ['AED', 'USDT'], code: 20, exchangeRate: 3.6668},
    {name: 'USDT на USD', cur: ['USDT', 'USD'], code: 30, exchangeRate: 1},
    {name: 'USD на USDT', cur: ['USD', 'USDT'], code: 30, exchangeRate: 1.012},
    {name: 'USD на AED', cur: ['USD', 'AED'], code: 50, exchangeRate: 3.643},
    {name: 'AED на USD', cur: ['AED', 'USD'], code: 50, exchangeRate: 3.672},
    {name: 'RUB(card) на AED', cur: ['RUB', 'AED'], code: 70, exchangeRate: 28.878},
    {name: 'Менеджер-чеки', code: 80, exchangeRate: null},
    {name: 'Переводы', code: 90, exchangeRate: null},
])
const prepareData = () => {
    return {
        pair: pair.value,
        way: way.value,
        sum: sum.value,
        wallet: wallet.value || null
}}
const finishExchange = () => {
    emit('close', prepareData())
} 
</script>

<style lang="scss">
.exchange-modal {
  display: flex;
  flex-direction: column;
  grid-gap: 8px
}

</style>
