<template>
    <div>
        <h1 class="title">Lazy load images</h1>
        <p class="italic bold">Check the console > network > img</p>
        <p>No images have loaded, there is one further down the page, as you scroll this image will be loaded in through using a lazy load image component. 😴</p>
        <h3 class="title title--page">Why lazy load images?</h3>
        <p>Lazy loading is a useful way to reduce the page size and increase speed performance. Specifically for images below the fold, some the user may never see, so why load them?</p>
        <p>Being able to detect where an item is in relation to scroll of the user is super useful, for many things. In this case we are detecting an image.</p>
        <h3 class="title title--page">Intersection Observer</h3>
        <p>
            The
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
                target="_blank"
                class="link"
            >Intersection Observer API</a> - "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport."
        </p>
        <p>It is an easier solution than the previous way of trying to detect elements in the DOM and has better performance.</p>
        <h3 class="title title--page">lazy-image.vue - template</h3>
        <prism language="javascript">{{one}}</prism>
        <p class="bold italic">Let's break down each part</p>
        <ul class="list list--bullet">
            <li>
                <span class="bold italic">transition</span> - adds a slight fade to the image once loaded in.
            </li>
            <li>
                <span class="bold italic">key</span> - set to the src, so the transition works.
            </li>
            <li>
                <span class="bold italic">src</span> - the image src passed as props.
            </li>
            <li>
                <span class="bold italic">alt</span> - the image alt tag.
            </li>
            <li>
                <span class="bold italic">class</span> - any additional class names needed from props.
            </li>
            <li>
                <span class="bold italic">title</span> - image title if needed from props.
            </li>
        </ul>
        <p>Now we can look at the javascript used to create the lazy load effect.</p>
        <h3 class="title title--page">lazy-image.vue - script</h3>
        <prism language="javascript">{{two}}</prism>
        <p class="bold italic">Let's break down each part</p>
        <ul class="list list--bullet">
            <li>
                <span class="bold italic">props</span> - src and alt are required, the rest are optional.
            </li>
            <li>
                <span class="bold italic">data - observer</span> - set to null to begin, once mounted the observer is set.
            </li>
            <li>
                <span class="bold italic">intersected</span> - either the placeholder image or the passed in image src.
            </li>
            <li>
                <span class="bold italic">computed - srcImage</span> - changing between the src passed or the holding image if intersected is false.
            </li>
            <li>
                <span class="bold italic">mounted</span> - use intersection observer api to check if the image has been reached if so change intersected to true, in turns changes the computed value to the passed in src props - going from a tiny transparent gif to the image src passed in creating the effect of an image loading in.
            </li>
            <li>
                <span class="bold italic">destroyed</span> - disconnect the observer once the component is destroyed.
            </li>
        </ul>
        <h3 class="title title--page">App.vue - template</h3>
        <p class="italic bold">Adding a lazyload image component to a page..</p>
        <prism language="javascript">{{three}}</prism>
        <p>Passing the image src and alt as props. Require may be needed for deployment to live for correct image paths.</p>
        <h3 class="title title--page">App.vue - styles</h3>
        <p class="italic bold">
            Some styles for the transition
            <span class="italic bold">"lazy-image"</span>.
        </p>
        <prism>{{four}}</prism>
        <p class="italic bold">Checking the console > network > img</p>
        <p>You should now see this image only loading in once scrolled to.</p>
        <lazy-image :src="require(`@/assets/img/gallery/1.jpg`)" alt="gallery image" />
        <p>😴 Now multiple images on the page can be loaded in only if the users scrolls and meets them. Saving page load weight and increasing speed performance. ⚡️</p>
    </div>
</template>

<script>
import LazyImage from "../components/LazyImage.vue";
export default {
    components: {
        LazyImage
    },
    
    data() {
        return {
            one: `<template>
    <transition name="lazy-image">
        <img
            :key="srcImage"
            :src="srcImage"
            :alt="alt"
            :class="classNames"
            :title="title"
        >
    </transition>
</template>`,
            two: `export default {
    name: 'LazyImage',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        classNames: {
            type: Array,
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            observer: null,
            intersected: false,
        };
    },
    computed: {
        srcImage() {
            return this.intersected
                ? this.src
                : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        },
    },
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
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
    },
};`,
            three: `<template>
    <lazy-image :src="require('@/assets/img/gallery/1.jpg')" alt="gallery image" />
</template>`,
            four: `<style lang="scss" scoped>
    .lazy-image-enter-active,
    .lazy-image-leave-active {
        transition: opacity 0.4s;
    }
    .lazy-image-enter,
    .lazy-image-leave-to {
        opacity: 0;
    }
</style>`
        };
    },
    metaInfo: {
        // Children can override the title.
        title: "Vue js tips",
        // Result: My Page Title ← My Site
        // If a child changes the title to "My Other Page Title",
        // it will become: My Other Page Title ← My Site
        titleTemplate: "%s ← Lazy image",
        // Define meta tags here.
        meta: [
            {
                name:
                    "A button can have many different use cases, you may want the button to be a link to external sites or just a button without a link to toggle something on the page."
            }
        ]
    }
};
</script>
