import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Moralis from './plugins/moralis'

const app = createApp(App)

app
.use(store)
.use(router)
.provide('$moralis', Moralis)
.mount('#app')
