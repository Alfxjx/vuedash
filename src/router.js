import Vue from "vue";
import Router from "vue-router";
import exampleButton from "./pages/exampleButton.vue";
import exampleCollapse from './pages/exampleCollapse.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/buttons",
      component: exampleButton
    },
    {
      path: '/collapse',
      component: exampleCollapse
    }
  ]
});
