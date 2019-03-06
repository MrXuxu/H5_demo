import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// fullpage
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/vendors/scrolloverflow'
Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
