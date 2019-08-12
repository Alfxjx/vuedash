import Vue from "vue";
import Button from "./button/dashButton.vue";
import Collapse from './collapse/collapse.vue';
import collapseItem from './collapse/collapse-item.vue';

const Vuedash = [Button, Collapse, collapseItem];

// Object.keys(Vuedash).forEach(name => {
//   Vue.component(name, Vuedash[name])
// })

Vuedash.forEach(component => {
  Vue.component(component.name, component);
});

export { Button };

export default Vuedash;
