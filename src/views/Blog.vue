<template>
  <div class="blog">
    <h1 class="title">Blog</h1>
    <div class="blog__card" v-for="(card, i) in blogCards" :key="i">
      <router-link :to="card.link" class="blog__card__title">
        <h2 class="blog__card__title">{{ card.title }}</h2>
      </router-link>
      <p class="blog__card__date">{{card.date}}</p>
      <p class="blog__card__intro">{{card.intro}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog",
  metaInfo: {
    // Children can override the title.
    title: "Vue js tips",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "%s ← Blog",
    // Define meta tags here.
    meta: [
      {
        name:
          "Vue js tips and tutorials on how to create re usable functionl widgets, including data, methods and much more."
      }
    ]
  },
  data() {
    return {
      blogCards: [
        {
          title: "Higher order functions",
          date: "26 Febuary 2020",
          intro: "What are higher order functions? And how do we use them?",
          link: "/higher-order-functions"
        },
        {
          title: "Computed",
          date: "26 Febuary 2020",
          intro: "Why use Computed Properties?",
          link: "/computed"
        },
        {
          title: "Vuex modules",
          date: "24 Febuary 2020",
          intro: "How to organise large scale vue apps using vuex modules.",
          link: "/vuex-modules"
        },
        {
          title: "Fade transition",
          date: "24 Febuary 2020",
          intro: "Re useable fade component",
          link: "/fade-transition"
        },
        {
          title: "Select",
          date: "20 Febuary 2020",
          intro: "Select items from a dropdown and send back to parent",
          link: "/select"
        },
        {
          title: "Infinite scroll",
          date: "19 Febuary 2020",
          intro:
            "Api calls can have lots of data, lets look out how to smartly load data...",
          link: "/infinite-scroll"
        },
        {
          title: "Vuex Basics",
          date: "24 July 2019",
          intro:
            "When an app becomes complex in terms of where data is being passed between multiple components, it is time to make use of Vuex...",
          link: "/vuex"
        },
        {
          title: "How to toggle active class inside v-for?",
          date: "2 August 2019",
          intro:
            "Using v-for inside a template is pretty common within a Vue app....",
          link: "/v-for"
        },
        {
          title: "Build a lightbox component",
          date: "20 August 2019",
          intro: "How to create a lightbox gallery, passing in data.",
          link: "/lightbox"
        },
        {
          title: "Accordion toggle",
          date: "21 August 2019",
          intro: "Create an accordion with content being passed in as data.",
          link: "/accordion"
        },
        {
          title: "Tab switch",
          date: "22 August 2019",
          intro: "Switch tabs and load components through naned slots.",
          link: "/tabs"
        },
        {
          title: "Tool tip",
          date: "22 August 2019",
          intro: "Tool tip on hover to display extra content.",
          link: "/tool-tip"
        },
        {
          title: "Lazy Image",
          date: "27 August 2019",
          intro: "Lazy load images through using intersection observer.",
          link: "/lazy-image"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.blog {
  &__card {
    padding-top: 10px;
    padding-bottom: 10px;

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