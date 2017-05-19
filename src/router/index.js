import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/first'
import secondPage from '@/components/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/first',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/second',
      name: 'secondPage',
      component: secondPage
    }
  ]
})
