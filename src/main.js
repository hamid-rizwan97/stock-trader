import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.filter('currency',(value) =>{
  return 'PKR' + value.toLocaleString()
})

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
