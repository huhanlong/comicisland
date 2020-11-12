import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/base.scss'
Vue.config.productionTip = false

Vue.filter('formatYi', (value) => {
  var Yi = Math.pow(10, 8)
  if (value > Yi) {
    return `${(value / Yi).toFixed(2)}亿`
  } else {
    return `${(value / Math.pow(10, 4)).toFixed(2)}万`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
