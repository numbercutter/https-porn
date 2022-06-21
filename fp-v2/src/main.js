import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

library.add(faSkullCrossbones)


createApp(App)
.use(store)
.use(VueSmoothScroll)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
