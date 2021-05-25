import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import router from './router'

// for API requests to openletter
// requests are handled in the dedicated view.
Vue.use(VueResource)
// config
Vue.prototype.$openletter = {
  apiURL: 'http://localhost:3000/',
  signURI: 'signer/sign',
  letterId: 2
}

// router for the views
Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
