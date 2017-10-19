'use strict'
import Vue from 'vue'
import App from './components/App.vue'
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
import VCharts from 'v-charts'
Vue.use(vueBeauty)
Vue.use(VCharts)

import "./assets/css/comm.scss";

new Vue({
  el: '#app',
  render: h => h(App)
})
