import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import VueTg from 'vue-tg'
import router from "./router"; 
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTg)
app.mount('#app')
