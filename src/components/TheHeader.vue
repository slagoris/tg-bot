<template>
    <div class="header">
        <div class="header__logo">
            <img src="/public/images/7gg-logo.svg" alt="logo">
        </div>
        <h1 class="header__hdng" v-text="route.meta.title"/>
        <div class="header__img">
            <img v-if="route.name === 'menu'" class="header__img__coins" src="/public/images/exchange-coins.webp"
                 alt="exchange coins">
            <img v-else class="header__img__flags" src="/public/images/flags.webp" alt="flags">
            <!--            <img class="header__img__flags" src="/public/images/flags.webp" alt="flags">-->
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 15px;
  margin: 10px 10px 0 10px;
  height: 90px;
  background: url("/public/images/header-bg.svg") center no-repeat;
  background-size: 100%;
  border-radius: 10px;

  &__logo {
    width: 76px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("/public/images/logo-bg.svg") center no-repeat;

  }

  &__hdng {
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
  }

  &__img {
    margin-left: auto;

    &__flags {
        max-height: 90px;

    }

    &__coins {
        max-height: 75px;
    }
  }
}
</style>
