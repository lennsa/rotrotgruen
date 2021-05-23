import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/offener-brief',
      name: 'Letter',
      component: Letter
    },
    {
      path: '/unterzeichner',
      name: 'Signatories',
      component: Signatories
    },
    {
      path: '/presse',
      name: 'Press',
      component: Press
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    }
  ]
})
