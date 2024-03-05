<template>
    <div class="exchange-modal">
        <Dropdown v-model="pair" placeholder="Выберите пару для обмена" :options="[1, 2, 3]"/>
        <Dropdown v-model="way" placeholder="Выберите способ" :options="[1, 2]"/>
        <InputText type="number" min="100" step="100" v-model="pair" placeholder=""/>
        <InputText v-model="wallet" placeholder="Введите адрес вашего USDT-кошелька"/>
        <Button label="Подтвердить"/>
        <tg-main-button />
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const pair = ref()
const way = ref()
const wallet = ref('')
</script>

<style lang="scss">
.exchange-modal {
    display: flex;
    flex-direction: column;
  grid-gap: 8px
}

</style>
