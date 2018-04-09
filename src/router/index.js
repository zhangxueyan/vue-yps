import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Subject from '@/pages/Subject'
import Classify from '@/pages/Classify'
import Cart from '@/pages/Cart'
import Me from '@/pages/Me'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subject',
      name: 'subject',
      component: Subject
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
