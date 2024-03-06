<template>
      <section>
<!--          <Button @click="backStep">НАЗАД</Button>-->
          <tg-back-button @click="backStep"/>
          <div style="width: 100%; margin-bottom: 30px; max-height: 568px">
              <img src="/public/images/greet-ru.jpg" alt="menu 7gg" width="100%">
          </div>
          <h1> <span>@{{ initDataUnsafe.user?.username }}, </span>Добро пожаловать в 7GG 🤝</h1>
          <ul>
              <li>💠 Первый в мире обменный пункт, который делится прибылью со своими клиентами💰</li>
              <li>💠 Самые выгодные курсы на покупку/продажу валюты, криптовалюты, менеджер-чеков</li>
              <li>💠 Быстрый, безопасный обмен USDT, RUB, AED, USD в офисах компании или с доставкой</li>
          </ul>
          <ul class="exchange-offers" :class="{ odd: exchangeOffers.length % 2 !== 0 }">
              <li class="exchange-offers__item" v-for="offer in exchangeOffers" 
                 
              >
                  <Button  severity="secondary"  @click="exchangeDialog = true; impactOccurred('heavy')">
                      {{ offer.name }} до {{ offer.exchangeRate }}
                  </Button>
                 
              </li>
          </ul>
          <ul class="menu">
              <li class="menu__item">
                  <Button @click="exchangeDialog = true; impactOccurred('medium')">Обменять валюты</Button>
              </li>
              <li><Button>История услуг</Button></li>
              <li><Button>Связаться с менеджером</Button></li>
              <li><Button>Курсы</Button></li>
              <li><Button>Курсы</Button></li>
              <li><Button>Наши услуги</Button></li>
          </ul>
      </section>
    <Dialog v-model:visible="exchangeDialog" modal :draggable="false" header="Обмен валют" :style="{width: '100%', height: '100%'}">
        <ExchangeModal @close="finishExchange"/>
    </Dialog>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import {useWebApp, useWebAppHapticFeedback, useWebAppNavigation, useWebAppPopup} from "../composables";
import ExchangeModal from "../components/modal/ExchangeModal.vue";
import {useGeneralStore} from "../stores/general.ts";
const { version, platform, initData, initDataUnsafe, sendData } = useWebApp()
const { showConfirm, showAlert, showPopup } = useWebAppPopup()
const { openLink, openTelegramLink, switchInlineQuery } = useWebAppNavigation()
const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()
const router = useRouter();
const exchangeDialog = ref(false)
const exchangeOffers = computed(() => {
    if(useGeneralStore().currentCity.code === 'dubai'){
        return [
            {name: 'USDT на AED', exchangeRate:  3.674},
            {name: 'AED на USDT', exchangeRate:  3.6668},
            {name: 'USDT на USD', exchangeRate:  1},
            {name: 'USD на USDT', exchangeRate:  1.012},
            {name: 'USD на AED', exchangeRate:  3.643},
            {name: 'AED на USD', exchangeRate:  3.672},
            {name: 'RUB(card) на AED', exchangeRate:  28.878},
            {name: 'Менеджер-чеки', exchangeRate: null},
            {name: 'Переводы', exchangeRate: null},
        ]
    }
    if(useGeneralStore().currentCity.code === 'moscow'){
        return [
            {name: 'RUB на USDT', exchangeRate:  3.674},
            {name: 'USDT на RUB', exchangeRate:  3.6668},
            {name: 'USD на USDT', exchangeRate:  1.012},
            {name: 'USDT на USD', exchangeRate:  1},
            {name: 'USDT на RUB(card)', exchangeRate:  28.878},
            {name: 'RUB(card) на USDT', exchangeRate:  28.878},
            {name: 'EUR на USDT', exchangeRate:  1.012},
            {name: 'USDT на EUR', exchangeRate:  1},
            {name: 'USD на AED', exchangeRate:  3.643},
            {name: 'AED на USD', exchangeRate:  3.672},
            {name: 'RUB на AED', exchangeRate:  28.878},
            {name: 'Менеджер-чеки', exchangeRate: null},
            {name: 'Переводы', exchangeRate: null},
        ]
    }
    if(useGeneralStore().currentCity.code !== ('moscow' || 'dubai')){
        return [
            {name: 'RUB на USDT', exchangeRate:  3.674},
            {name: 'USDT на RUB', exchangeRate:  3.6668},
            {name: 'USDT на RUB(card)', exchangeRate:  28.878},
            {name: 'RUB(card) на USDT', exchangeRate:  28.878},
            {name: 'Менеджер-чеки', exchangeRate: null},
            {name: 'Переводы', exchangeRate: null},
        ]
    }
})

const backStep = () => {
  if (exchangeDialog.value) {
    exchangeDialog.value = false
  } else {
      router.back()
  } 
}
const finishExchange = (data) => {
    sendData(JSON.stringify(data))
    // console.log(data)
    // fetch('https://test-bot-888.invi.pw/api/70013d3c-f63c-4e1d-8255-1895707e7980', {
    //     method     : 'POST',
    //     body       : JSON.stringify(data),
    //     credentials: 'include',
    //     headers    : {'Content-Type': 'application/json'}
    // }).then(function (response) {
    //     return response.json();
    // }).then(function (result) {
    //     // onCallback && onCallback(result);
    // }).catch(function (error) {
    //     console.log(error)
    // });
    exchangeDialog.value = false
    notificationOccurred('success')
    showAlert('Успешно, ваша заявка принята. Отправили вам детали обмена.')
    // switchInlineQuery('Спасибо. Заявка принята. ' +
    //     'Наш адрес: ONEX Платежные решения ' +
    //     'https://goo.gl/maps/tP8o95g3TFQ64Jr57 ' +
    //     'Cпособ отправки: Криптокошелёк' +
    //     'Способ получения: Криптокошелёк'
    //    )
}
</script>
