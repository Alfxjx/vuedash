// TODO: 需要把这个文件迁移一下，可以解决main.ts报错
import Vue from "vue";
import DashButton from "./basic/button/index";
// import Collapse from "./collapse/collapse.vue";
// import collapseItem from "./collapse/collapse-item.vue";
// import Popup from "./popup/popup.vue";
import Tooltip from "./notice/tooltip/index";
// // import TipClickOut from './directives/TipClickOut';

// import { dashFilters } from "./filters/index";

const Vuedash = [DashButton, Tooltip];

// // Object.keys(Vuedash).forEach(name => {
// //   Vue.component(name, Vuedash[name])
// // })

// Vuedash.forEach(component => {
//   Vue.component(component.name, component);
// });

const install = function(Vue: any, opts: any) {
  Vuedash.map((component: any) => {
    Vue.component(component.name, component);
  });
};

export default { install, DashButton, Tooltip };

// export { dashFilters, Vuedash };

// export default Vuedash;
