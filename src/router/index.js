import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import List from '@/components/list'
// import Help from '@/components/help'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../components/help.vue')
    },
    {
      path: '/list/:id',
      name: 'List',
      component: () => import('../components/list.vue')
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/end',
      name: 'end',
      component: () => import('../components/end.vue')
    }
  ]
})
