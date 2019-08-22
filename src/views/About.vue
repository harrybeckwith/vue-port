<template>
  <div class="container--small">
    <h1 class="title">About</h1>
    <p>
    Hey, i am a front end developer specialising in Vue Js! You will find, blog posts either about vue js, javascript and front end development on this site.  Enjoy ☕️
    </p>
    <div class="icons"><a href="https://www.instagram.com/harry_j_beckwith/?hl=en" target="_blank"><img class="icons__icon" src="../assets/icons/instagram-logo.svg" alt="instagram logo"></a><a href="https://github.com/harrybeckwith" target="_blank"><img class="icons__icon" src="../assets/icons/github-logo.svg" alt="github logo"></a><a href="https://medium.com/@harrybeckwith" target="_blank"><img class="icons__icon" src="../assets/icons/medium-logo.svg" alt="medium logo"></a></div>
  </div>
</template>
<script>
export default {
      metaInfo: {
    // Children can override the title.
    title: 'Vue js tips',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← About',
    // Define meta tags here.
    meta: [
      {name: 'Vue js tips and tutorials on how to create re usable functionl widgets, including data, methods and much more.'}
    ]
  },
}
</script>
<style lang="scss">
.icons {
    display: flex;
    justify-content: center;

    &__icon {
        width: 25px;
        -webkit-transition: 0.15s ease;
        transition: 0.15s ease;
    }

    a {
        margin-right: 10px;
        margin-left: 10px;
    }
}
</style>