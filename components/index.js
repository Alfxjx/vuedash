import Vue from 'vue'
import dashButton from './dashButton.vue'
const Vuedash = {
  dashButton
}

Object.keys(Vuedash).forEach(name => {
  Vue.component(name, Vuedash[name])
})

export default Vuedash
