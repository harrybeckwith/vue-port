<template>
<div>
    <h1 class="title">Fade transtion</h1>
    <button @click="select =! select">Fade in</button>
    <fade-transition group :duration="500"> 
        <cover-bg v-if="select" key='a'/>
            <div class="pop-up" v-if="select"  key='b'>
             pop up
                <button @click="select =! select">Fade out</button>
             </div>
    </fade-transition>
    <p> Fading on a site can make content that is comming into view based on a condition, seem smoother and provide a nicer experience for the user.
        Using a component that can be modified to be group transition also, duration can be passed in so that the component is custom. It takes slots so anything inside
        the component with a key that is toggled will have the fade effect.
    </p>
         <h3 class="title title--page">FadeTransition.vue - template</h3>
        <prism language="javascript">{{ one }}</prism>
        <p class="bold italic">Let's break down each part</p>
        <ul class="list list--bullet">
            <li><span class="italic bold">:is</span> here we pass group or it wil default to transition.</li>
            <li><span class="italic bold">:tag</span> set the transition to be any html tag eg (p,div,span)</li>
            <li><span class="italic bold">enter-active-class</span> set the class name fadeIn on enter.</li>
            <li><span class="italic bold">leave-active-classs</span> set the class name fade-move on leave.</li>
            <li><span class="italic bold">v-bind="$attrs"</span> making none specified props available if needed.</li>
            <li><span class="italic bold">v-on="hooks"</span> adds the computef function to that returns keywords to make the animation times.</li>
            <li><span class="italic bold">slot</span> so any content can be passed in.</li>
        </ul>

         <h3 class="title title--page">FadeTransition.vue - script</h3>
        <prism language="javascript">{{ two }}</prism>
        <p class="bold italic">Let's break down each part</p>
        <ul class="list list--bullet">
            <li><span class="italic bold">props</span> defines the duration for slow/fast fade. Group for group transitions is needed. tag so any html tag can be used.</li>
            <li><span class="italic bold">computed - type</span> defines either a transition group or deafault is a normal transtion</li>
            <li><span class="italic bold">computed - hooks</span> specifies the key inputs needed on a transition tag, they are changed based on duration passed in.</li>
            <li><span class="italic bold">methods </span> these are called into the hooks computed for calculation</li>
        </ul>
    <h3 class="title title--page">Summary</h3>
        <button @click="select =! select">Fade in</button>
    <p>Having this code availble for reuse saves time re writting the same transition fade with css multiple times. The ability to use slots and specify if a group transition
        is great if you have multiple items you wish to fade. 😎
    </p>
    </div>
</template>
<script>
import FadeTransition from '../components/FadeTransition.vue';
import CoverBg from '../components/CoverBg.vue';

export default {
    name: 'FadeTransitionPage',
    data() {
        return {
            select: false,
            one: `<template>
  <component :is="type"
             :tag="tag"
             enter-active-class="fadeIn"
             leave-active-class="fadeOut"
             move-class="fade-move"
             v-bind="$attrs"
             v-on="hooks">
      <slot></slot>
  </component>
</template>`,
two: `export default {
  name: 'fade-transition',
  props: {
    duration: {
      type: Number,
      default: 300
    },
    group: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    type() {
      return this.group ? "transition-group" : "transition";
    },
    hooks() {
      return {
        beforeEnter: this.setDuration,
        afterEnter: this.cleanUpDuration,
        beforeLeave: this.setDuration,
        afterLeave: this.cleanUpDuration,
        leave: this.setAbsolutePosition,
        ...this.$listeners
      };
    }
  },
  methods: {
    setDuration(el) {
      el.style.animationDuration = this.duration+'ms';
    },
    cleanUpDuration(el) {
      el.style.animationDuration = "";
    },
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = "absolute";
      }
    }
  }
};`
        }
    },
    components: {
        FadeTransition,
        CoverBg
    }
}

</script>
<style lang="scss" scoped>
    .pop-up {
        position: absolute;
        padding: 30px;
        background-color: white;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>