import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import Vuex from './views/Vuex.vue';
import Vfor from './views/Vfor.vue';
import Lightbox from './views/Lightbox.vue';
import Accordion from './views/Accordion.vue';
import Tabs from './views/Tabs.vue';
import ToolTip from './views/ToolTip.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
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
    {
      path: '/v-for',
      name: 'vfor',
      component: Vfor,
    },
    {
      path: '/lightbox',
      name: 'lightbox',
      component: Lightbox,
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: Accordion,
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs,
    },
    {
      path: '/tool-tip',
      name: 'tooltip',
      component: ToolTip,
    },
  ],
});
