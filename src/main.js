import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Vuedash, dashFilters } from "../components/index.js";

Vue.config.productionTip = false;
Vue.use(dashFilters);
Vue.use(Vuedash);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
