import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import VueTg from 'vue-tg'
import router from "./router"; 
const app = createApp(App)

import 'primevue/resources/themes/aura-light-amber/theme.css'
import Button from "primevue/button"
import Dialog from "primevue/dialog"
import InputText from "primevue/inputtext"
import Dropdown from 'primevue/dropdown';

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {ripple: true});
app.use(VueTg)

app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Dropdown', Dropdown)
app.mount('#app')
