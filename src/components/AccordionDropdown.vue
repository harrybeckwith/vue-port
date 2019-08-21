<template>
  <div class="accordion">
      <div class="accordion__item"
       v-for ="(item, i) in accordionData" 
       :key="i"
       :class="{accordion__active: i === activeItem}">
       <div class="accordion__title" @click="toggleAccordion(i)">
         <span class="accordion__arrow">></span>
        {{item.title}}
       </div>

       <div class="accordion__content">
          {{item.content}}
       </div>
 
      </div>
  </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
      accordionData: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        activeItem: null,
      }
    },
    methods: {
      toggleAccordion(i) {

    if(this.activeItem === i) {
      this.activeItem = null
    } else {
        this.activeItem = i;
    }
        
      }
    }

}
</script>

<style scoped lang="scss">

.accordion {
  &__item {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid grey;
    margin-bottom: 15px;
  }

  &__title {
    position: relative;
    cursor: pointer;
    font-weight: bold;
    color: black;
    padding: 10px 30px 10px 40px;
  }

  &__content {
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: max-height 0.15s ease-in-out;
    
  }

  &__arrow {
    transition: transform .2s linear;
    position: absolute;
    left: 15px;
  }

  &__active {

    .accordion__content {
      max-height: 500px;
          visibility: visible;
           padding: 10px 30px 30px 40px;
    
    }

    .accordion__arrow {
      transform:rotate(90deg);
    }
  }
}

</style>