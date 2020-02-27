<template>
  <div>
    <h1 class="title italic">Vue Select</h1>
    <p>
      A reuseable dropdown that can be used to select an item from a list, and search.
      The selected can be sent back to the parent so available from child to parent.
      With the selected in the parent a watch fnc can be created to perhaps perform some logic/api call
      with the slected.
    </p>
    <h3 class="title title--page italic">Functionality</h3>
    <ul class="list list--bullet">
      <li>Search for list items</li>
      <li>Select item which is emitted to parent component</li>
      <li>Add custom styles</li>
      <li>Clearable search option</li>
      <li>Disabled option available</li>
    </ul>
    <p>
      More to be added, such as styles that can be passed in. Clear search.
      can have the option for disabled
      can have the option clearable
    </p>
    <p class="gap__md">
      To view the code source follow
      <a
        class="link"
        href="https://github.com/harrybeckwith/vue-port/blob/master/src/components/DropSelect.vue"
      >the link to github</a>.
    </p>
    <DropSelect
      :styles="dropSelectStyles"
      :passedData="passedData"
      v-on:childToParent="onChildClick"
      :disabled="false"
      :clearable="true"
    ></DropSelect>
  </div>
</template>
<script>
import DropSelect from "../components/DropSelect";
export default {
  name: "Select",
  components: {
    DropSelect
  },
  watch: {
    // check for updates from selected item
    fromChild: {
      handler: function(val, oldVal) {
        console.log(`val:${val}`);
        console.log(`oldVal:${oldVal}`);
        this.foo(); // method here based on an item being selected
      }
    }
  },
  data() {
    return {
      dropSelectStyles: {
        outer: {
          width: "400px"
        },
        search: {
          padding: "10px 5px"
        },
        dropDown: {
          maxHeight: "300px"
        }
      },
      fromChild: "",
      passedData: [
        "Afghanistan",
        "Akrotiri",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina"
      ]
    };
  },
  methods: {
    // store the clicked data from child
    onChildClick(value) {
      this.fromChild = value;
    },
    foo() {
      // api call could be made here or something
      console.log("selected item updated");
    }
  },
  metaInfo: {
    // Children can override the title.
    title: 'Vue js tips',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← Select',
    // Define meta tags here.
    meta: [
      {name: 'Create a re usable component in vue js that allows you to pass data into a dropdown and search.'}
    ]
  }
};
</script>
