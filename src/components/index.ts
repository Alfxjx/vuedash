// 需要把这个文件迁移一下，可以解决main.ts报错
import Vue from "vue";
import DashButton from "./basic/button/index";
// import Collapse from "./collapse/collapse.vue";
// import collapseItem from "./collapse/collapse-item.vue";
// import Popup from "./popup/popup.vue";
import Tooltip from "./notice/tooltip/index";
import ClickOut from '../directives/clickOut';

// import { dashFilters } from "./filters/index";

// FIXME: 自定义指令
const Vuedash = [DashButton, Tooltip, ClickOut];

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

export { install, DashButton, Tooltip };

// export { dashFilters, Vuedash };

export default Vuedash;
