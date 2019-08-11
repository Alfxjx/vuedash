import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuedash from '../components/index.js'

Vue.config.productionTip = false

Vue.use(Vuedash);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
