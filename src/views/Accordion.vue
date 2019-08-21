<template>
  <div>
    <h1 class="title italic">
            Create an Accordion component 
  </h1>
      <AccordionDropdown  :accordionData ="accordionInfo" class="gap__md"/>
        <p>Click the above accordion to see the it working 👆</p>
        <h3 class="italic title--page">
           What is an accordion?
        </h3>
          <p>
           An accordion is a useful component that can be used for things such as FAQ's, it is also useful for reducing the height of the page if lots of content is needed, clicking on the question opens the related answer beneath, clicking on another question will close any open open accordions.
        </p>

        <h3 class="italic title--page">
           What data to pass in?
        </h3>
        <p>
          Essentially we want each accordion to have a title and text. Knowing this we can create an array of objects, each object being the individual accordion. The keys will be title and content.
        </p>
        <p>Lets look at accordion from the parent component.</p>
        <h3 class="italic title--page">
           Accordion component - app.vue
        </h3>
        <prism language="javascript">{{one}}</prism>
        <p>First lets bind the accordionData to the accordionData, which will be our array of objects...</p>
         <h3 class="italic title--page">
           Accordion component - app.vue - script
        </h3>
         <prism language="javascript">{{two}}</prism>
         <p>
             The above, we import the accordion component, and create the array of objects stored in accordionInfo.
         </p>
          <h3 class="italic title--page">
          Meanwhile - inside AccordionDropdown.vue - template
        </h3>
         <prism language="javascript">{{three}}</prism>
         <p>Above we have the accordion item being looped over, passing the title and content.</p>
         <p>We have the class bound to an if statement to check if true, if so add the class accordion title.</p>
         <p>A click event which gets the index and checks if a match.</p>
          <h3 class="italic title--page">
         AccordionDropdown.vue - script
        </h3>
          <prism language="javascript">{{four}}</prism>
        <h3 class="italic title--page">A few things are happening here...</h3>
          <ul class="list list--bullet">
              <li>props is set to the array accordionData</li>
              <li>data - active item is set to null initially, as we want all accordions shut to start.</li>
              <li>toggleAccordion method - first checks if clicked is active - if so set activeItem to null, removes the class - which has the styles to close/open the accordion</li>
              <li>toggleAccordion method - else set the clicked item to have the active class - opening the accordion.</li>
          </ul>
           <h3 class="italic title--page">
         AccordionDropdown.vue - styles
        </h3>
          <prism language="css">{{five}}</prism>
          <p>Above we have the styles, importantly the accordion__active is where the opening occurs, along side rotation of the arrow.</p>
          <p>Setting the content max-height:0 we can create a transition using the active class for the individual accordion.</p>
        <h3 class="italic title--page">That's all</h3>
        <p>That's it, now this can be reused with any data passed in throughout a site or app. 🤩</p>
  </div>
</template>

<script>
import AccordionDropdown from '../components/AccordionDropdown.vue'
export default {
    components: {
        AccordionDropdown,
    },
    data() {
        return {
            accordionInfo: [
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'},
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'},
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'},
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'}
            ],
            one: `<template>
    <AccordionDropdown :accordionData ="accordionInfo"/>
</template>`,
two: `import AccordionDropdown from '../components/AccordionDropdown.vue'
export default {
    components: {
        AccordionDropdown,
    }, data() {
        return {
              accordionInfo: [
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'},
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'},
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'},
                {title: 'Lorem ipsum dolor sit amet?', content: 'onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna.'}
            ]
        }
    }
}`,
three: `<template>
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
</template>`,
four: `export default {
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
}`,
five: `
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

</style>`
        }
    }
}
</script>

<style>

</style>
