import Vue from "vue";
import Button from "./button/dashButton.vue";
import Collapse from "./collapse/collapse.vue";
import collapseItem from "./collapse/collapse-item.vue";
import Popup from "./popup/popup.vue";
import Tooltip from "./tooltip/tooltip.vue";
// import TipClickOut from './directives/TipClickOut';

const Vuedash = [Button, Collapse, collapseItem, Popup, Tooltip];

// Object.keys(Vuedash).forEach(name => {
//   Vue.component(name, Vuedash[name])
// })

Vuedash.forEach(component => {
  Vue.component(component.name, component);
});

// export { Button };

export default Vuedash;
