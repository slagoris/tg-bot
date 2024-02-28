import { createApp } from 'vue'
import router from "./router";
import './style.css'
import App from './App.vue'
import VueTg from 'vue-tg' 
const app = createApp(App)
app.use(VueTg)
app.use(router)
app.mount('#app')
