<template>
      <section>
          <Button @click="router.back()">НАЗАД</Button>
          <tg-back-button @click="router.back()"/>
          <div style="width: 100%; margin-bottom: 30px; max-height: 568px">
              <img src="/public/images/greet-ru.jpg" alt="menu 7gg" width="100%">
          </div>
          <h1> <span>@{{ initDataUnsafe.user?.username }}, </span>Добро пожаловать в 7GG 🤝</h1>
          <ul>
              <li>💠 Первый в мире обменный пункт, который делится прибылью со своими клиентами💰</li>
              <li>💠 Самые выгодные курсы на покупку/продажу валюты, криптовалюты, менеджер-чеков</li>
              <li>💠 Быстрый, безопасный обмен USDT, RUB, AED, USD в офисах компании или с доставкой</li>
          </ul>
          <ul class="exchange-offers">
              <li class="exchange-offers__item" v-for="offer in exchangeOffers" 
                  @click="exchangeDialog = true; impactOccurred('medium')"
              >
                  {{ offer.name }} {{ offer.exchangeRate }}
              </li>
          </ul>
          <ul class="menu">
              <li class="menu__item" v-for="item in menu">
                  <Button @click.prevent="showAlert(`${item.name}`);">{{item.name}}</Button>
              </li>
          </ul>
      </section>
    <Dialog v-model:visible="exchangeDialog" modal :draggable="false" header="Обмен валют" :style="{width: '100%', height: '100%'}">
        <ExchangeModal />
    </Dialog>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import {useWebApp, useWebAppHapticFeedback, useWebAppPopup} from "../composables";
import ExchangeModal from "../components/modal/ExchangeModal.vue";
const { version, platform, initData, initDataUnsafe, sendData } = useWebApp()
const { showConfirm, showAlert, showPopup } = useWebAppPopup()
const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()
const router = useRouter();
const exchangeDialog = ref(false)
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
</script>
