import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Prism from "vue-prism-component";

Vue.component('prism', Prism);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
