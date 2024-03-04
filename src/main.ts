import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueTg from 'vue-tg'
import router from "./router"; 
const app = createApp(App)

app.use(router)
app.use(VueTg)
app.mount('#app')
