import Vue from "vue";
import Button from "./button/dashButton.vue";
const Vuedash = [Button];

// Object.keys(Vuedash).forEach(name => {
//   Vue.component(name, Vuedash[name])
// })

Vuedash.forEach(component => {
  Vue.component(component.name, component);
});

export { Button };

export default Vuedash;
