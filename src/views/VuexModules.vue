<template>
  <div>
    <h1 class="title italic">Vuex modules</h1>
    <p>
      Working on larger application, a single store.js file can be become bloated and hard to maintain and find bugs. Modules allow you to create separate stores, that can be referenced inside components
      keeping the store code organised.
    </p>
    <p>Car count from cars module: {{ carCount }}</p>
    <input type="number" v-model="count" />
    <button @click="increase">choose car count</button>
    <p>Animals from animals module:</p>
    <ul class="list list--bullet">
      <fade-transition group :duration="500">
        <li v-for="animal in animals" :key="animal">{{animal}}</li>
      </fade-transition>
    </ul>
    <p>Add an animal:</p>
    <input type="text" v-model="newAnimal" placeholder="type animal" />
    <button @click="addAnimal">Add animal</button>
    <p>
      The examples above use independent stores. For a larger application you could be displaying data from two different stores on separate components/pages. Having them independent of each over
      means we can avoid confusion.
    </p>
    <h3 class="italic title--page">store.js</h3>
    <p
      class="bold italic"
    >The below is the store.js file which we can set up to use modules like so:</p>
    <prism language="javascript">{{one}}</prism>
    <p>Modules get imported and set inside the modules object.</p>
    <p class="bold italic">Inside the Cars file - cars.js</p>
    <prism language="javascript">{{two}}</prism>
    <p>As you can see we set the const variable which we can export - this object holds our state, mutations, actions and getters - the usual vuex file items.</p>
    <p>
      <span class="italic bold">namespaced</span> When the module is registered, all of its getters, actions and mutations will be automatically namespaced based on the path the module is registered at. We can
      then access each store independently - the example below will show this.
    </p>
    <h3 class="italic title--page">app.vue - script</h3>
    <p>
      Here we can see how to reference the seperate stores in mapGetters the store name is used
      <span class="italic bold">'Cars' </span>this is the cars module. The same from
      <span class="italic bold">'Aniamls'</span>
    </p>
    <prism language="javascript">{{ three }}</prism>
    <h3 class="italic title--page">Summary</h3>
    <p>
      Setting the store up to use modules is greatly benefical to save maintenance time for debugging, keeping code independent, and cleaner.
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FadeTransition from "../components/FadeTransition";
export default {
  name: "VuexModules",
  components: {
    FadeTransition
  },
  data() {
    return {
      count: 0,
      newAnimal: "",
      one: `import Vuex from 'vuex'
import Vue from 'vue'
import Cars from './modules/cars'
import Animals from './modules/animals'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      Cars,
      Animals
  }
});`,
      two: `const carsStore = {
    namespaced: true,
    state: {
        carCount: 9
    },
    mutations: {
        increaseCount(state, amount) {
            state.carCount = amount
        }
    },
    actions: {
        INCREASE_COUNT({commit}, amount) {
            commit('increaseCount', amount)
        }
    },
    getters: {
        getCarCount(state) {
            return state.carCount
        }
    }
}

export default carsStore;`,
      three: ` computed: {
    ...mapGetters({
      carCount: "Cars/getCarCount",
      animals: "Animals/getAnimals"
    })
  },
  methods: {
    ...mapActions({
      INCREASE_COUNT: "Cars/INCREASE_COUNT",
      ADD_ANIMAL: "Animals/ADD_ANIMAL"
    }),
    increase() {
      this.INCREASE_COUNT(this.count);
    },
    addAnimal() {
      this.ADD_ANIMAL(this.newAnimal);
      this.newAnimal = "";
    }
  }`
    };
  },
  computed: {
    ...mapGetters({
      carCount: "Cars/getCarCount",
      animals: "Animals/getAnimals"
    })
  },
  methods: {
    ...mapActions({
      INCREASE_COUNT: "Cars/INCREASE_COUNT",
      ADD_ANIMAL: "Animals/ADD_ANIMAL"
    }),
    increase() {
      this.INCREASE_COUNT(this.count);
    },
    addAnimal() {
      this.ADD_ANIMAL(this.newAnimal);
      this.newAnimal = "";
    }
  },
    metaInfo: {
    // Children can override the title.
    title: 'Vue js tips',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← Vuex modules',
    // Define meta tags here.
    meta: [
      {name: 'Vuex modules', content: 'Use modules in vuex to allow independent stores allowing for neater code.'}
    ]
  }
};
</script>