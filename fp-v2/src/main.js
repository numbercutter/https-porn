import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(store).use(VueSmoothScroll).mount('#app')
