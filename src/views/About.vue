<template>
  <div class="container--small">
    <h3 class="title title--lg">
      About
    </h3>
    <p>
    Hey, i am a front end developer specializing in Vue Js! You will find, blog posts either about vue js, javascript and front end development on this site. Enjoy ☕️
    </p>
    <div class="icons"><a href="https://www.instagram.com/harry_j_beckwith/?hl=en" target="_blank"><img class="icons__icon" src="/icons/instagram-logo.svg" alt="instagram logo"></a><a href="https://github.com/harrybeckwith" target="_blank"><img class="icons__icon" src="/icons/github-logo.svg" alt="github logo"></a><a href="https://medium.com/@harrybeckwith" target="_blank"><img class="icons__icon" src="/icons/medium-logo.svg" alt="medium logo"></a></div>
  </div>
</template>
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