/* eslint-disable */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router= new VueRouter({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  created(){
    console.log(routes);
  }
}).$mount('#app');
