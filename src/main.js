import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuedash from '../src/components/index.js'

Vue.config.productionTip = false

new Vue({
  Vuedash,
  router,
  render: h => h(App)
}).$mount('#app')
