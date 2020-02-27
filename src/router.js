import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Blog from "./views/Blog.vue";
import Vuex from "./views/Vuex.vue";
import Vfor from "./views/Vfor.vue";
import Lightbox from "./views/Lightbox.vue";
import Accordion from "./views/Accordion.vue";
import Tabs from "./views/Tabs.vue";
import ToolTip from "./views/ToolTip.vue";
import Button from "./views/Button.vue";
import LazyImage from "./views/LazyImage.vue";
import InfiniteScroll from "./views/InfiniteScroll.vue";
import Select from "./views/Select.vue";
import FadeTransition from "./views/FadeTransition.vue";
import VuexModules from "./views/VuexModules.vue";
import Computed from "./views/Computed.vue";
import HigherOrderFunctions from "./views/HigherOrderFunctions.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Blog",
      component: Blog
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/vuex",
      name: "vuex",
      component: Vuex
    },
    {
      path: "/v-for",
      name: "vfor",
      component: Vfor
    },
    {
      path: "/lightbox",
      name: "lightbox",
      component: Lightbox
    },
    {
      path: "/accordion",
      name: "accordion",
      component: Accordion
    },
    {
      path: "/tabs",
      name: "tabs",
      component: Tabs
    },
    {
      path: "/tool-tip",
      name: "tooltip",
      component: ToolTip
    },
    {
      path: "/button",
      name: "button",
      component: Button
    },
    {
      path: "/lazy-image",
      name: "lazy-image",
      component: LazyImage
    },
    {
      path: "/infinite-scroll",
      name: "infinite-scroll",
      component: InfiniteScroll
    },
    {
      path: "/select",
      name: "select",
      component: Select
    },
    {
      path: "/fade-transition",
      name: "FadeTransitionPage",
      component: FadeTransition
    },
    {
      path: "/vuex-modules",
      name: "VuexModules",
      component: VuexModules
    },
    {
      path: "/computed",
      name: "Computed",
      component: Computed
    },
    {
      path: "/higher-order-functions",
      name: "HigherOrderFunctions",
      component: HigherOrderFunctions
    }
  ]
});
