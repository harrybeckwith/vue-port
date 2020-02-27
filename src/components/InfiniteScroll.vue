<template>
  <div>
    <h1 class="title">Infinite scroll - with accordion </h1>
    <p>The below adds items from an api call from <a class="link" href ="https://picsum.photos">picsum.photos</a>. 
    Using the Accordion component we can pass the call items into this to make use of a dropdown 
    allowing space to be saved on the page.</p>
    <p>One problem with making this type of call is that it could return 1000's of results. 
      This could be costly for the user in terms of speed. One way around this is to limit the number of
      calls from the api. However we need to see the data. Infinite scroll is a great solution. Using this 
      we can increase the number of calls once the user reaches the bottom of the page/area.</p>
      <p>Adding in <a class="link" href ="https://github.com/ElemeFE/vue-infinite-scroll">vue-infinite-scroll</a>
       is very easy and works smoothly.</p>
    <h3 class="title title--page">Get source code:</h3>
    <a class="link" href ="https://github.com/harrybeckwith/vue-port/blob/master/src/components/FormValidation.vue">
    View code on github.
    </a>
        <h3 class="title title--page">Functionality of the code:</h3>
        <ul class="list list--bullet">
          <li>
            You can open the accordion up to see the photo by clicking the arrow.
          </li>
          <li> 
            Search for a photo via id
          </li>
          <li> 
            Scroll to the bottom and load more items
          </li>
        </ul>
      <p>Api items loaded: {{ photoFeed.length }}</p>
    <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" infinite-scroll-distance="10"></div>
    <input type="text" placeholder="Search via ID" @keyup="searchID($event)">
    <div class="photo-feed" v-if="!notFound">
      <Accordion :accordionData="photoFeed" v-for="(item, i) in photoFeed" :key="i" :current="i">
        <template v-slot:accordion-title>
          <div class="accordion__container">
            <p class="accordion__title">Author: {{ photoFeed[i].author }}</p>
            <p class="accordion__title">ID:{{ photoFeed[i].id }}</p>
          </div>
        </template>
        <template v-slot:accordion-content>
          <img class="accordion__img" :src="photoFeed[i]['download_url']">
        </template>
      </Accordion>
    </div>
    <div v-else>not found</div>
  </div>
</template>
<script>
import axios from "axios";
import Accordion from "./Accordion.vue";
import infiniteScroll from 'vue-infinite-scroll';
export default {
  name: "FormValidation",
   directives: {infiniteScroll},
  components: {
    Accordion
  },
  data() {
    return {
      photoFeed: [],
      activeAccordion: null,
      busy: false,
      count: 10,
      notFound: false,

    };
  },
   created() {
    this.loadMore();
  },
  mounted() {
   this.initialLoad();
  },
  methods: {
    initialLoad() {
 axios
      .get(`https://picsum.photos/v2/list?limit=${this.count}`)
      .then(response => {
        this.photoFeed = response.data;
      })
      .catch(error => console.log(error));
    },
  loadMore() {
    // prevent scrolling when searched by id
      if(this.photoFeed.length >= 10) {
      // increase by one item per scroll
      this.count += 1;
      // call to get increasing limit each time
      axios.get(`https://picsum.photos/v2/list?limit=${this.count}`).then(response => {
        // set the photofeed to the new amount
        this.photoFeed = response.data;
        // stop loading on scroll
        this.busy = false;
      });
      }

    },
    searchID(search) {
      // get user id search
      const id = search.target.value;
      // check if not empty
      if(id !== '') {
      const arr = [];
      axios
      .get(`https://picsum.photos/id/${id}/info/?grayscale&blur=2`)
      .then(response => {
        // items have been found
        this.notFound = false;
        // push found item to arr
        arr.push(response.data);
        // update the data to display found id item
        this.photoFeed = arr;
      })
      .catch(error => {
      console.log(error)
      // if id typed was not not found - display error message
        this.notFound = true;
      
      });
      } else {
        // if empty search display first ten from intial call
        this.initialLoad();
      }

    },
  }
};
</script>
<style lang="scss" scoped>
.photo-feed {
  margin-top: 2rem;
}
.accordion {
  &__img {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin: 0;
  }
  &__inside {
    display: none;
  }
  &__active {
    background-color: purple;
  }
}
.accordion__active .accordion__inside {
  display: block;
}
</style>