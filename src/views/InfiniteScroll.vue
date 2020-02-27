<template>
  <InfiniteScroll/>
</template>

<script>
import InfiniteScroll from "../components/InfiniteScroll.vue";
export default {
  name: "Vue js tips",
  metaInfo: {
    // Children can override the title.
    title: 'Vue js tips',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← Infinite Scroll',
    // Define meta tags here.
    meta: [
      {name: 'How to use infinite scroll in vue.', content: 'Use infinite scroll in vue to load api calls reducing load time.'}
    ]
  },
  components: {
    InfiniteScroll
  }
};
</script>

<style>
</style>
