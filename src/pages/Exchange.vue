<template>
      <section>
          <tg-back-button @click="router.back()"/>
          <div style="width: 100%; margin-bottom: 30px; max-height: 568px">
              <img src="/public/images/exchange-ru.jpg" alt="exchange 7gg" width="100%">
          </div>
          <ul class="exchange-offers">
              <li class="exchange-offers__item" v-for="offer in exchangeOffers" @click="router.push(`/exchange`)">
                  {{ offer.name }} {{ offer.exchangeRate }}
              </li>
          </ul>
          <ul class="menu">
              <li class="menu__item" v-for="item in menu">
                  <Button >{{item.name}}</Button>
              </li>
          </ul>
      </section>
<!--    <Dialog v-model:visible="exchangeDialog" modal :draggable="false" header="Обмен валют" :style="{width: '100%', height: '100%'}">-->
<!--        <ExchangeModal />-->
<!--    </Dialog>-->
</template>

<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";
import {ref} from "vue/dist/vue";
import {useGeneralStore} from "../stores/general.ts";
import ExchangeModal from "../components/modal/ExchangeModal.vue";

const router = useRouter()
const route = useRoute() 
const pair = ref() 
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
</script>

<style >

</style>
