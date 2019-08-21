<template>
  <div class="lightbox">
      <img class="lightbox__thumbnail" 
      :src="require(`@/assets/img/gallery/${item.thumbnail}`)" 
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
          :src="require(`@/assets/img/gallery/${lightboxInfo[current].thumbnail}`)" 
           :alt="lightboxInfo[current].alt">
        </div>
        <div @click="next" 
        v-if="!checkNext"
         class="lightbox__arrows lightbox__arrows--next">
         <img src="@/assets/icons/right-arrow.svg" alt="arrow">
         </div>
      </div>
  </div>
</template>

<script>
export default {
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

}
</script>

<style scoped lang='scss'>
  .lightbox {

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
  }
</style>