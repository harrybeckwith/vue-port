<template>
  <div>
    {{ photoFeed.length }}
    <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" infinite-scroll-distance="100"></div>
    <input type="text" placeholder="Add unique ID" @keyup="validateID($event)">
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
      .get("https://picsum.photos/v2/list?limit=10")
      .then(response => {
        this.photoFeed = response.data;
      })
      .catch(error => console.log(error));
    },
  loadMore() {
      console.log("Adding 10 more data results");
      if(this.photoFeed.length >= 10) {
      this.busy = true;
      this.count += 1;
      axios.get(`https://picsum.photos/v2/list?limit=${this.count}`).then(response => {
        console.log(response.data)
        this.photoFeed = response.data;

        this.busy = false;
      });
      }

    },
    validateID(search) {

      const id = search.target.value;
      console.log(id);
      if(id !== '') {
      const arr = [];
      axios
      .get(`https://picsum.photos/id/${id}/info/?grayscale&blur=2`)
      .then(response => {
        this.notFound = false;
        arr.push(response.data);
        this.photoFeed = arr;
      })
      .catch(error => {
      console.log(error)
        this.notFound = true;
      
      });
      } else {
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