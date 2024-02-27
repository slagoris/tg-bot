<template>
    <section id="top_sect" class="second">
        <h1 style="color: mediumpurple">
            Example
        </h1>
        <button @click="DemoApp.expand();">Развернуть Webview</button>
        <button id="main_btn" @click="DemoApp.sendMessage('Привет APD!');">Нажми меня, поздороваемся</button>
        <button id="with_webview_btn" @click="DemoApp.sendMessage('Привет мир!', true);">Send «Hello, World!» with
            inline webview button
        </button>
        <button id="data_btn" @click="DemoApp.sendTime(true);">Отправь время в бота (x10 раз)</button>
        <button @click="DemoApp.toggleMainButton(this);">Скрыть главную кнопку</button>
    </section>
 
</template>

<style>


</style>

<script setup lang="ts">

</script>
