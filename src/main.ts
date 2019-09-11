import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import { Vuedash, dashFilters } from "./components/index";
import DashButton from "./components/index";

Vue.config.productionTip = false;
// Vue.use(dashFilters);
// Vue.use(Vuedash);
Vue.component("dash-button", DashButton);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
