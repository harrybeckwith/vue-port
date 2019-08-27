<template>
    <transition name="lazy-image">
        <img :key="srcImage" :src="srcImage" :alt="alt" :class="classNames" :title="title" />
    </transition>
</template>

<script>
export default {
    name: "LazyImage",
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        classNames: {
            type: Array,
            default: null
        },
        title: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            observer: null,
            intersected: false
        };
    },
    computed: {
        srcImage() {
            return this.intersected
                ? this.src
                : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        }
    },
    mounted() {
        this.observer = new IntersectionObserver(entries => {
            const image = entries[0];
            if (image.isIntersecting) {
                this.intersected = true;
                this.observer.disconnect();
            }
        });

        this.observer.observe(this.$el);
    },
    destroyed() {
        this.observer.disconnect();
    }
};
</script>

<style lang="scss" scoped>
.lazy-image-enter-active,
.lazy-image-leave-active {
    transition: opacity 0.4s;
}
.lazy-image-enter,
.lazy-image-leave-to {
    opacity: 0;
}
</style>