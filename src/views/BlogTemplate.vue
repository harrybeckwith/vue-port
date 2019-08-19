<template>
    <div class="blog-page container--small" v-if="info">
    <h2 class='title--lg title'>
        {{ info.title }}
    </h2>
    <div v-html="info.content"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BlogTemplate',
    data() {
        return {
            info: null,
        };
    },
    created() {
        axios
            .get(`/data/blogs/${this.$route.params.slug}.js`)
            .then(response => (this.info = response.data));
    },
};
</script>

<style lang="scss">
.blog-page {
    img {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    ul {
        padding-top: 10px;
        padding-bottom: 10px;
        li {
            list-style: disc;
        }
    }
}
</style>
