<template>
  <div>
   <NavBar/>
    <router-view class="container"/>
  </div>
</template>
<script>
import NavBar from './components/NavBar';
export default {
    components: {
        NavBar,
    },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>