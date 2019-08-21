<template>
  <div>
   <NavBar/>
    <router-view class="container"/>
  </div>
</template>
<script>
import NavBar from './components/NavBar';
import 'prismjs/prism'
import 'prismjs/themes/prism.css'

export default {
    components: {
        NavBar,
    },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

</style>