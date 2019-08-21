<template>
  <div>
      <h1 class="title italic">
            Create a Lightbox component
        </h1>
         
      <div class="gallery-grid">
        <lightbox :lightboxInfo="lightboxData"/>
      </div>
      <p class="italic">Click the above images to see the Lightbox gallery 👆</p>
        <h3 class="italic title--page">
           How to create the lightbox?
        </h3>
        <p>
            A Lightbox brings thumbnails to attention and allows easy viewing of images. Pretty common to see and used on lots of sites. Let's walk through how to create a Vue Lightbox gallery. 📸
        </p>
        <p>
            Data needed to be passed into the component
        </p>
        <ul class="list list--bullet">
            <li>thumbnail image path </li>
            <li>Lightbox image</li>
            <li>alt for thumbnail</li>
            <li>alt for Lightbox image</li>
            <li>caption</li>
        </ul>
          <h3 class="italic title--page">
            app.vue - template
        </h3>
        <prism language="javascript">{{one }} </prism>
         <h3 class="italic title--page">
              app.vue - script
        </h3>
         <prism language="javascript">{{two}} </prism>
         <h3 class="italic title--page">
            app.vue - style
        </h3>
          <prism language="css">.gallery-grid {
            display:flex;
            .lightbox__thumbnail {
                width: 200px;
                margin: 5px;
                cursor: pointer;
            }
        }
        </prism>
         <p>Above is the lighboxData we pass into the Lightbox component. An array of objects each holding its own information as mentioned above.</p>
         <p>Lets look inside the lightbox component at how the data is displayed.</p>
         <h3 class="italic title--page">
           Inside lightbox component
        </h3>
         <prism language="javascript">{{three}}</prism>
        <p>There's lots going on above. Essentially there is: </p>
        <ul class="list list--bullet">
            <li>
                A loop that creates the image thumbnails
            </li>
            <li>
                A click event that gets the current index of the image
            </li>
            <li>
                The Lightbox image its self based on the current clicked image
            </li>
            <li>
                arrows and close icons
            </li>
        </ul>
          <h3 class="italic title--page">
            How to create the slider? 
        </h3>
        <p>
            We have to keep track of the current and pass this into the object of images. This way we can create some basic logic to go forward or back inside the object to display next and previous images.
        </p>
        <p>
            The Lightbox image uses the current inside its image path to keep in sync.
        </p>
         <h3 class="italic title--page">
            Let's check out the script - Lightbox.vue - script
        </h3>
        <prism language="javascript">{{four}}</prism>
        <p>
            <span class="bold italic">data</span> - We have data to track the current. showNext and showPrev to sync the arrows based on what number the user is at in the slider. For example hide the previous arrow when you can't go back any further.
        </p>
        <p>
            <span class="bold italic">methods</span> - lbClick gets the current item and sets this to current. We then have showLb which toggles the showLb bringing this into display.
        </p>
        <p> <span class="bold italic">next</span> - checks if the current clicked index is less than or equal to the total amount of images, if so increase current - go forward one image.</p>
        <p> <span class="bold italic">prev</span> - checks if the current clicked index is greater than or equal to zero, if so decrease current - go back one.</p>
        <p> <span class="bold italic">toggleLb</span> - hides the whole Lightbox section - bound to the cross icon.</p>
        <p> <span class="bold italic">computed</span> - keeps check of the current compared to the amount of items available to loop through, returning true of false for each click of next, prev. In turn shows or hides the next and prev arrows.</p>
         <h3 class="italic title--page">
            lightbox.vue - style
        </h3>
        <prism language="css">.lightbox {

    &__bg {
      position:fixed;
      top: 0;
      left: 0;
      bottom:0;
      right:0;
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: #000000cc;
    }

    &__slider {
      &__img {
        width: 700px;
      }
    }

    &__arrows {
      width: 50px;
      cursor: pointer;
    }

    &__close {
      position: absolute;
          cursor: pointer;
      top: 10px;
      right: 10px;
      width: 30px;
    }
  }</prism>
  <p>
      Combining the above you can create a vue Lightbox component, of course this could be improved, captions can be added in as an option. Other settings such as expanding the Lightbox could be added as a data setting and adding in transitions for the image slider. 
  </p>
  <p>
      That's it, hopefully this will become handy - perhaps even just for the slider logic 😀. 
  </p>
  </div>
</template>


<script>
import Lightbox from '../components/Lightbox.vue'
export default {
    components: {
        Lightbox,
    },
    data() {
        return {
            lightboxData: [
                {
                    thumbnail: '1.jpg',
                    alt: 'thumbnail 1',
                    lb: 'lb/1.jpg',
                    caption: 'title one'
                },
                 {
                    thumbnail: '2.jpg',
                    alt: 'thumbnail 2',
                    lb: 'lb/2.jpg',
                    caption: 'title two'
                },
                 {
                    thumbnail: '3.jpg',
                    alt: 'thumbnail 3',
                    lb: 'lb/3.jpg',
                    caption: 'title 3'
                },
                {
                    thumbnail: '4.jpg',
                    alt: 'thumbnail 4',
                    lb: 'lb/4.jpg',
                    caption: 'title 4'
                }
            ],
            one: `<template>
    <div class="gallery-grid">
        <lightbox :lightboxInfo="lightboxData"/>
    </div>
</template>`,
two: `import Lightbox from '../components/Lightbox.vue'
export default {
    components: {
        Lightbox,
    },
    data() {
        return {
            lightboxData: [
                {
                    thumbnail: '1.jpg',
                    alt: 'thumbnail 1',
                    lb: 'lb/1.jpg',
                    caption: 'title one'
                },
                 {
                    thumbnail: '2.jpg',
                    alt: 'thumbnail 2',
                    lb: 'lb/2.jpg',
                    caption: 'title two'
                },
                 {
                    thumbnail: '3.jpg',
                    alt: 'thumbnail 3',
                    lb: 'lb/3.jpg',
                    caption: 'title 3'
                },
                {
                    thumbnail: '4.jpg',
                    alt: 'thumbnail 4',
                    lb: 'lb/4.jpg',
                    caption: 'title 4'
                }
            ]
        }
    }`,
    three: `<template>
  <div class="lightbox">
      <img class="lightbox__thumbnail" 
      :src="require('@/assets/img/gallery/' + \${item.thumbnail})" 
      :alt="item.alt" 
      v-for="(item, i) in lightboxInfo" :key="i"
      @click="lbClick(i)">
      <div class="lightbox__bg" 
      v-if="showLb">
         <div class="lightbox__close" @click="toggleLb" >
          <img src="@/assets/icons/close.svg" alt="close icon">
        </div>
        <div @click="prev" 
        v-if="checkPrev" 
        class="lightbox__arrows lightbox__arrows--prev">
     
        <img src="@/assets/icons/left-arrow.svg" alt="left arrow">
        </div>
        <div class="lightbox__slider">
          <img  class="lightbox__slider__img" 
          :src="require('@/assets/img/gallery/' + \${lightboxInfo[current].thumbnail})" 
           :alt="lightboxInfo[current].alt">
        </div>
        <div @click="next" 
        v-if="!checkNext"
         class="lightbox__arrows lightbox__arrows--next">
         <img src="@/assets/icons/right-arrow.svg" alt="arrow">
         </div>
      </div>
  </div>
</template>`,
four: `export default {
  props: {
    lightboxInfo: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
        current: 0,
        showNext: true,
        showLb: false,
    }
  },
  methods: {
    lbClick(i) {
      this.current = i;
      this.showLb = true;
    },
    next() {
      if(this.current <= this.lightboxInfo.length) {
        this.current++;
      }
    },
    prev() {
      if(this.current >= 0 ) {
        this.current --;
      } 
    },
    toggleLb() {
      this.showLb = false;
    }
  },
  computed: {
    checkNext() {
      return this.current === this.lightboxInfo.length -1
    },
    checkPrev() {
      return this.current > 0
    },
  }

}`
        }
    }

}
</script>

<style  lang="scss">

.gallery-grid {
    display:flex;
    .lightbox__thumbnail {
        width: 200px;
        margin: 5px;
        cursor: pointer;
    }
}

</style>