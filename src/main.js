import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/scss/normalize.css'
import '@/scss/animations.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
