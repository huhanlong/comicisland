import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Login from '../views/Login'
import Register from '../views/Register'
import Ranking from '../views/Ranking'
import My from '../views/My'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        { path: 'history', component: History },
        { path: 'favorite', component: Favorite },
        { path: '/', redirect: '/hello/favorite' }
      ]
    },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/register', component: Register },
    { path: '/ranking', component: Ranking },
    { path: '/search', component: Search },
    { path: '/searchresult', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', redirect: '/home' }
  ]
})

export default router
