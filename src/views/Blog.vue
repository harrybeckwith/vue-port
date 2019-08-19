<template>
    <div class="blog">
        <h1 class="title">Blog</h1>
        <div class="blog__card" v-for="(card, i) in blogCards" :key="i">
                  <router-link :to="card.link"  class="blog__card__title"> 
                <h2 class="blog__card__title">
                    {{ card.title }}
                </h2>
                  </router-link>
                <p class="blog__card__date">
                    {{card.date}}
                </p>
                <p class="blog__card__intro">
                    {{card.intro}}
                </p>

        </div>
    </div>
</template>
<script>
export default {
    name: 'blog',
    layout: 'blog',
    data() {
        return {
            blogCards: [
                {
                    title: 'Vuex Basics',
                    date: '24 July 2019',
                    intro:
                        'When an app becomes complex in terms of where data is being passed between multiple components, it is time to make use of Vuex...',
                    link: '/vuex',
                },
                {
                    title: 'How to toggle active class inside v-for?',
                    date: '2 August 2019',
                    intro:
                        'Using v-for inside a template is pretty common within a Vue app....',
                    link: '/v-for',
                },
                {
                    title: 'How to create a Vue.js lightbox 📸',
                    date: '3 April 2019',
                    intro: 'How to build a lightbox with source code',
                    link: '/lightbox',
                },
            ],
        };
    },
};
</script>
<style lang="scss">
.blog {
    &__card {
        padding-top: 40px;
        padding-bottom: 40px;

        &__intro {
            max-width: 600px;
        }

        &__date {
            color: grey;
            text-transform: uppercase;
            font-size: 14px;
        }

        &__title {
            color: #8234fc;
            transition: 0.3s linear;

            &:hover {
                color: darken(#8234fc, 40%);
            }
        }
    }
}
</style>