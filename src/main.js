import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Prism from "vue-prism-component";
import Meta from 'vue-meta';

Vue.use(Meta);


Vue.component('prism', Prism);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app');
