import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import router from './router'
import config from './config'

// for API requests to openletter
// requests are handled in the dedicated view.
Vue.use(VueResource)

// router for the views
Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  config,
  components: { App },
  template: '<App/>'
})
