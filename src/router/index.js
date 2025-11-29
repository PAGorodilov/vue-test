import { createRouter, createWebHistory } from 'vue-router'
import Market from '@/views/Market.vue'
import Cart from '@/views/Cart.vue'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'market' },
  },
  {
    path: '/market',
    name: 'market',
    component: Market,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  { path: '/404', name: '404', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
