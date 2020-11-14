import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Notify } from 'vant'
// import { IndexBar, IndexAnchor } from 'vant'
import './assets/styles/base.scss'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(Notify)
// Vue.use(IndexBar);
// Vue.use(IndexAnchor);
Vue.filter('formatYi', (value) => {
  var Yi = Math.pow(10, 8)
  if (value > Yi) {
    return `${(value / Yi).toFixed(2)}亿`
  } else {
    return `${(value / Math.pow(10, 4)).toFixed(2)}万`
  }
})
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/logo.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
