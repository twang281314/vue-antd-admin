// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
import VCharts from 'v-charts'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(vueBeauty)
Vue.use(VCharts)
Vue.use(mavonEditor)

import "./assets/css/comm.scss";
Vue.config.productionTip = false

//全局守卫
//https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('token');
    next();
  }

  let token = sessionStorage.getItem('token');
  if (!token) {
    next({ path: '/login' })
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
