<template>
    <div class="blog-sidebar">
        <div v-for ="(value, key) in links" 
        :key="value"
        class="blog-sidebar__link"
        @click="getTag(key)">
        {{ key }} <span class="blog-sidebar__number"> {{ value }} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSideBar',
    props: {
        links: {
            type: Object,
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
.blog-sidebar {
    margin-top: 50px;
    &__link {
        display: block;
        padding: 5px 0;
        color: $primary;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    &__number {
        background-color: $primary;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        display: inline-flex;
        justify-content: center;
        margin-left: 10px;
        font-size: 12px;
        align-items: center;
        color: #fff;
    }
}
</style>
