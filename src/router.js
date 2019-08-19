import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import Vuex from './views/Vuex.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex,
    },
  ],
});
