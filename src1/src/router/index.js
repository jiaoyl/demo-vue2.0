import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myfirst from '@/components/myfirst'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/aa',
      name: 'Hello',
      component: myfirst
    }
  ]
})
