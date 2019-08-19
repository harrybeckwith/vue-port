<template>
    <div>
        <h1 class="title italic">
            Vuex — how to use state
        </h1>
        <p>
            When an app becomes complex in terms of where data is being passed between multiple components, it is time to make use of Vuex.
        </p>
        <p>
            Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
        </p>
        <img src="/img/blog/vuex/vuex.png" alt="vuex chart" class="image">
        <h3 class="italic title--page">
                Why use Vuex?
        </h3>
        <ul class="list list--bullet">
            <li>
                Vuex provides one source of truth
            </li>
            <li>
                Every component has access to the global state
            </li>
             <li>
                The global state is reactive, just like local state
            </li>
            <li>
                Reduces component data tracking from becoming complex.
            </li>
            <li>
                Vuex provides a state pattern to make updates standardized.
            </li>
        </ul>
        <p>
            To set up Vuex you have to install the npm package.
        </p>
        <pre><code class="language-bash"> npm i vuex --save</code></pre>
        <p>
           Inside the src folder, we can now set up a store.js file. 
        </p>
        <p>
            Heres how the store.js file would look.
        </p>
<pre><code class="language-javascript">
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});</code></pre>
<p>Inside main.js we can link the store to the Vue instance by importing the store file and added to Vue…</p>
<pre><code class="language-javascript">import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');</code></pre>
<p>Right now we have the store set up 🥳 but we cannot access or edit yet 😕.</p>
<h3 class="italic title title--page">
    How to work with the store (vuex)
</h3>
<img src="/img/blog/vuex/store.png" alt="vuex chart" class="image">
<h3 class="italic title title--page">
   Mutations
</h3>
      <ul class="list list--bullet">
            <li>Commit + track state changes</li>
            <li>The best practice is for actions to call mutations then mutations update the state directly.</li>
            <li>Using the dev tools we can roll back mutations back to the previous state value.</li>
          </ul>
          <h3 class="italic title title--page">
              Getting the state from Vuex into computed properties.
          </h3>
          <p>
              Inside the <span class="bold">store.js</span> we can create getters, these interact directly with the state in the store. They are used to get the state. We can then display the getters inside components through computed properties.
          </p>
          <p><a href="https://vuex.vuejs.org/guide/getters.html" class="link" target="_blank">Documentation for getters here.</a></p>
          <p><span class="bold">Store.js</span> file with state and getters set up.</p>
        <pre><code class="language-javascript">import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'aaa', name: 'Adsasas' },
    events: [
      {
        id: 1,
        title: 'title one',
        organizer: 'a'
      },
      {
        id: 2,
        title: 'title two',
        organizer: 'b'
      },
      {
        id: 3,
        title: 'title three',
        organizer: 'c'
      }
    ],
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneToDos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})</code></pre>
<h3 class="title title--page italic">
    How to link the getters to components?
</h3>
<p>
    Use computed properties, but first, we can map the getters for easy access like so.
</p>
  <p><span class="bold">component.vue</span></p>
 <pre><code class="language-javascript">{{ one }}</code></pre>
   <p><span class="bold">component.vue - script section</span></p>
  <pre><code class="language-javascript">{{ two }}</code></pre>
  <p>You have to import { mapGetters } from Vuex to be able to place inside the computed properties. Using the spread operator and pacing each getter as a string array item we can then reference individual getters inside the template.</p>
    <p>We can also create getters that take arguments which are then used as a computed property and take input inside the template. The example for this is the getter getEventById in the above two code blocks.</p>
    <h3 class="title title--page italic">
  Mutations
</h3>
<ul class="list list--bullet">
  <li>
Can update/mutate Vuex State.
  </li>
  <li>
They are synchronous, they happen one after another.
  </li>
</ul>
        <p><a href="https://vuex.vuejs.org/guide/mutations.html" class="link" target="_blank">Mutations documentation here.</a></p>

          <h3 class="title title--page italic">
  Actions
</h3>
<ul class="list list--bullet">
  <li>
Can wrap business logic around mutations
  </li>
  <li>
Always put <span class="bold">Mutations</span> within <span class="bold">Actions</span> — as business logic, later on, would be easy to apply, this increases the scalability.
  </li>
</ul>
        <p><a href="https://vuex.vuejs.org/guide/actions.html" class="link" target="_blank">Actions documentation here.</a></p>


         <pre><code class="language-javascript">import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    categories: ['travel', 'fun', 'social', 'work', 'other'],
    events: [],
  },
  getters: {
    cat: state => {
      return state.categories;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    },
    events: state => {
      return state.events;
    },
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    createEvent({ commit }, event) {
      commit('ADD_EVENT', event);
    },
  },
});</code></pre>
<p>
  Here we can see that mutation has been created that takes an event and pushes to the events array. The action is the code that we will dispatch to from the component, in turn, this calls the mutation and updates the store state.
</p>
<p>
  Let's see how to call the action inside a component.
</p>
     <pre><code class="language-bash">this.$store.dispatch('createEvent', this.event)</code></pre>
  <p>
    Referencing the store and dispatch with the name that matches actions function name, this will now send the this. event data into the action, then call the mutation and update the state.
  </p>
  <p>
    Using the pattern above is a way to set up and use Vuex as the data point in your application was helps avoid tracking through components to see where the data needs to pass to. This can become bloated in larger applications so a module approach is needed to aid larger apps. Documentation can be found <a href="https://vuex.vuejs.org/guide/modules.html" target="_blank" class="link">here</a>.  </p>
    <p>
      That’s the basics of Vuex, cheers ☕️
    </p>

    </div>
</template>
<script>
export default {
    layout: 'blog',
    data() {
      return {
        one: `<template>
    <div>
    <h1>Create Event {{ userName }}</h1>
    <p>There are {{catLength}} categories</p>
      <ul>
        <li v-for="cat in categories" :key="cat">
            {{cat}}
        </li>
      </ul>
      <p>
      {{ getEventById(3) }}
    </div>
</template>`,
two: `import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['user', 'categories']),
    ...mapGetters(['getEventById', 'catLength'])
  }
}`
      }
    }
};
</script>