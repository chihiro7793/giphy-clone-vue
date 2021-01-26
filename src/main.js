import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { Routes } from "./Routes"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
  render: h => h(App),
}).$mount('#app')
