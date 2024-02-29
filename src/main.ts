import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueTg from 'vue-tg' 
const app = createApp(App)
app.use(VueTg)
app.mount('#app')