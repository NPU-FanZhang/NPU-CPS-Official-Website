import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import loading from './components/index';
import ElementUI from 'element-ui';
import moment from 'moment'

Vue.prototype.$moment = moment

Vue.config.productionTip = false;

Vue.use(loading);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
