<template>
    <div>
        <h1 class="title italic">
            How to toggle active class inside v-for?
        </h1>
        <img src="../assets/img/blog/v-for/v-for.jpeg" alt="v-for" class="image">
        <p>
            Using v-for inside a template is pretty common within a Vue app. It can become tricky if you wanted to toggle an active class on the selected item only and not every item inside the loop. Let's see how…
        </p>
        <h3 class="italic title--page">
            app.vue
        </h3>
        <prism language ="javascript">{{one}}</prism>
        <p>The above, we have a basic app.vue file template. A v-for looping over items with i set for the index. The class is then bound to active, only when the index is equal to the activeItem, will this equal true and produce the active class.</p>
        <h3 class="italic title--page">
              Data and methods - app.vue
        </h3>
        <prism language ="javascript">{{two}}</prism>
        <p>First, we set the <span class="bold">activeItem data = null</span>.</p>
        <p>Then we change this data with the selectItem method, which takes the <span class="bold">index</span> as a <span class="bold">parameter</span>  and updates the <span class="bold">activeItem</span>  to match the index of the clicked item. Now when we click on the first item, <span class="bold">activeItem = 0, i = 0</span>, therefor the first item will be given the <span class="bold"> active class</span>, and the other items will not.</p>

        <p>
            A pretty simple solution but works well, if possible you can change the data being looped over and store a isActive key and value and toggle this way also.
        </p>

        <p>Thank you ☕️</p>
    </div>
</template>
<script>
export default {
    layout: 'blog',
    data() {
      return {
        one: `<template>
     <div>
        <div 
        v-for="(item, i ) in items" 
        :key="i"
        :class="{ active: i === activeItem}"
        >
         // some looped items from data here
         // button for active toggle 
            <button @click="selectItem(i)"> make item active </button>
        </div>
    </div>
</template>`,
two: `
export default {
    data() {
        return {
            activeItem: null,
        };
    },
    methods: {
        selectItem(i) {
            this.activeItem = i;
        },
    },
};
`
      }
    }
};
</script>