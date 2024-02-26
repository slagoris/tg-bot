import {createRouter, createWebHistory, } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory('/tg-bot/'),
  routes
})
export default router
