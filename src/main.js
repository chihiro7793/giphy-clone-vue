import Vue from 'vue'
import App from './App.vue'
import { Routes } from "./Routes"
import VueRouter from "vue-router"
import { store } from "./store/Store"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'

library.add(faBookmark)
library.add(farBookmark)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

