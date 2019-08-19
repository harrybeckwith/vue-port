<template>
    <div class="nav-bar">
        <div class="container nav-bar__container">
                <router-link to='/'  class="logo" tag="h3">;</router-link>
            <nav class="nav">
                <ul class="nav__list">
                    <router-link to='about' tag="li" class="nav__item"><p>About</p></router-link>
                    <router-link to='/' tag="li" class="nav__item"><p>Blog</p></router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style scoped lang="scss">
.nav-bar {
    box-shadow: 0 0 5px #cccccc;
    padding: 20px;
    margin-bottom: 50px;
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.nav {
    &__list {
        display: flex;
    }
    &__item {
        margin-left: 15px;
        font-weight: bold;
        cursor: pointer;
    }
}
.logo {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
}
</style>
