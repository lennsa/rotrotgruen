import Router from 'vue-router'

import Home from '@/views/Home'
import Letter from '@/views/Letter'
import Signatories from '@/views/Signatories'
import Press from '@/views/Press'
import Contact from '@/views/Contact'
import Sign from '@/views/Sign'

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
    },
    {
      path: '/mitunterzeichner-werden',
      name: 'Sign',
      component: Sign
    }
  ]
})
