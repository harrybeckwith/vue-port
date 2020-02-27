<template>
  <div class="toggle-drop" :style="styles.outer">
    <div class="toggle-drop__search__container">
      <input
        :style="styles.search"
        type="text"
        placeholder="search for an item"
        v-model="current"
        class="toggle-drop__search"
        :class="{'toggle-drop__search--selected': selectedClicked}"
        @keyup="searchDropDown($event)"
        @click="clickSearch"
        v-click-outside="hide"
        :disabled="disabled"
      >
      <img
        v-if="clearable"
        @click="clearSearch"
        class="toggle-drop__search__icon"
        src="@/assets/icons/close-circle.svg"
        alt="close icon"
      >
    </div>
    <ul class="toggle-drop__dropdown" v-show="showList" :style="styles.dropDown">
      <li
        v-for="(item, i) in currentItems"
        :key="i"
        class="toggle-drop__dropdown__item"
        @click="selectItem(item)"
      >{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "DropSelectC",
  directives: {
    ClickOutside
  },
  props: {
    passedData: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      deafault: {}
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      current: "",
      selectedClicked: false,
      showList: false,
      foundItems: []
    };
  },
  computed: {
    // based on the search - display found or all
    currentItems() {
      if (this.foundItems.length > 0) {
        return this.foundItems;
      } else {
        return this.passedData;
      }
    }
  },
  methods: {
    // get item name
    selectItem(item) {
      this.current = item;
      // send item to parent
      this.$emit("childToParent", item);
      this.selectedClicked = true;
    },
    clickSearch() {
      this.showList = true;
    },
    searchDropDown(e) {
      // search the list for items
      const search = e.target.value;
      const found = this.findMatches(search, this.passedData);
      if (found.length === 0) {
        this.hide();
      } else {
        this.showList = true;
        this.foundItems = found;
      }
    },
    findMatches(wordToMatch, data) {
      // sort in alphabetical order
      return data.filter(item => {
        // create regular expression
        // so it can be passed into match
        // g = global
        // i = insenstive - lower or upper
        const regex = new RegExp(wordToMatch, "gi");
        // array = found items
        return item.match(regex);
      });
    },
    hide() {
      this.showList = false;
    },
    clearSearch() {
      this.current = "";
    }
  }
};
</script>

// Drop down component
// - can have the option for disabled
// - can have the option clearable
// make reuseable
<style lang="scss" scoped>
input[type="text"]:disabled {
  background: #dddddd;
  cursor: not-allowed;
}
.toggle-drop {
  max-width: 400px;
  &__search {
    width: 100%;
    padding: 10px 5px;
    font-size: 1rem;
    &__container {
      position: relative;
    }

    &__icon {
      width: 20px;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__dropdown {
    border: 1px solid rgba(60, 60, 60, 0.26);
    border-radius: 4px;
    padding: 0;
    max-height: 300px;
    overflow: scroll;

    &__item {
      padding: 5px 10px;
      &:hover {
        background-color: lightblue;
        cursor: pointer;
      }
    }
  }
}
</style>

