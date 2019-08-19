<template>
<div>
    <div class="blog-card" v-for="(item, i) in content" :key="i">
        <img class="blog-card__img" :src="`./img/blog/${item.img}`" :alt="item.title">
        <div class="blog-card__info">
            <h3 class="blog-card__title">{{ item.title }}</h3>
            <p class="blog-card__tag">
                <span class="hl-text"> IN </span>
                <span  class="blog-card__tag__link" @click="getTag(item.tag)">
                    {{ item.tag }}
                </span>
            </p>
            <p class="blog-card__info">{{item.content}}</p>
            <router-link :to="{name: 'blog-item', params: { slug: item.link}}"
             tag="div" 
             class="btn">
             Continue reading
             </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'blogCard',
    props: {
        content: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getTag(t) {
            this.$emit('messageFromChild', t);
        },
    },
};
</script>

<style scoped lang="scss">
.blog-card {
    display: flex;
    margin-top: 50px;
    &__img {
        width: 262px;
        align-self: center;
        margin-right: 40px;
    }
    &__title {
        font-size: 24px;
    }

    &__tag {
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 5px;
        text-transform: uppercase;
        &__link {
            color: $primary;
        }
    }
}
</style>
