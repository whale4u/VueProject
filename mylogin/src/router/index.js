import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        needLogin: false
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta:{
        needLogin: true
      }
    }
  ]
})
