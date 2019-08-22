<template>
    <div>
        <h1 class="title italic">
            Tooltip
      </h1>
      <div class="gap__md">
        <p> 
        <tool-tip position="top">
            <template v-slot:title>
                tooltip top
            </template>
            <template v-slot:content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit lacus vestibulum risus, nec bibendum purus nibh sit amet     metus. 
            </template>
        </tool-tip> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris pharetra convallis.
        </p>
        <p> Lorem ipsum dolor sit
              <tool-tip>
            <template v-slot:title>
                tooltip bottom
            </template>
            <template v-slot:content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit lacus vestibulum risus, nec bibendum purus nibh sit amet metus.
            </template>
        </tool-tip> 
              amet, consectetur  adipiscing elit. Mauris pharetra convallis.
        </p>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <tool-tip position="right">
            <template v-slot:title>tooltip right</template>
            <template v-slot:content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit lacus vestibulum risus, nec bibendum purus nibh sit amet metus. </template>
        </tool-tip> 
        Mauris pharetra convallis.
        </p>
            <p>   <tool-tip position="left">
                <template v-slot:title>
                    tooltip left
                </template>
                <template v-slot:content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit lacus vestibulum risus, nec bibendum purus nibh sit amet metus.
                </template>
                </tool-tip> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra convallis.
              
        </p>
        </div>
        <p class="italic">Hover the links above to see the tooltips 👆</p>
        <h3 class="italic title--page">
           How to create the tooltip?
        </h3>
        <p>
            A Tooltip can be used to pop up additional information that extends from the current content. Helpful for tips 🤔
        </p>
         <h3 class="italic title--page">
           What is needed?
        </h3>
        <p><span class="bold italic">Named slots</span> are used, each <span class="bold italic">tool-tip component</span> holds the tooltip title and the pop up content for that tite.</p>
        <p >Here is the <span class="bold italic">parent component with tool-top template slots being passed in..</span></p>
        <h3 class="italic title--page">
           app.vue - template
        </h3>
        <prism language="javascript">{{one}}</prism>
        <p class="bold italic">Inside the component it has</p>
        <ul class="list list--bullet">
            <li> props position set to top - this changes the css class inside the component - for positioning of the content block.</li>
            <li> title named slot section - the section which gets hovered on.</li>
            <li>content named slot section - holding the details of the tooltip popup.</li>
        </ul>
        <p>Let's now look inside the component.</p>
        <h3 class="italic title--page">
           tool-tip.vue - template
        </h3>
     <prism language="javascript">{{two}}</prism>
     <p class="bold italic">Inside the template it has</p>
        <ul class="list list--bullet">
            <li> mouseenter and mouseleave methods using the same method - to toggle the content on and off.</li>
            <li>named titled slot</li>
            <li>transition to fade the content in/out on hover</li>
            <li>:class that takes position props - either top, left, right or bottom. This changes the position of the tool tip relative to its title.</li>
            <li>named slot for the content</li>
        </ul>
        <h3 class="italic title--page">
           tool-tip.vue - script
        </h3>
     <prism language="javascript">{{three}}</prism>
      <p class="bold italic">Inside the script it has</p>
        <ul class="list list--bullet">
            <li>props for the position attacthed the to class in the template</li>
            <li> data - show set to false - to hide the content for the tooltip.</li>
            <li>a method tooltipToggle to switch show to true/false on mouseenter mouseleave</li>
        </ul>
        <p>That's the complete code to create a tooltip, using slots helps keep the content flexible enough to accept a range of content from components to static content.😎 </p>
        <h3 class="italic title--page">
           Finally the styles 
        </h3>
     <prism language="css">{{four}}</prism>
       <p>That's the complete code to create a tooltip, using slots helps keep the content flexible enough to accept a range of content from components to static content.😎 </p>
    </div>
</template>
<script>
import ToolTip from '../components/ToolTip.vue';
export default {
    name: 'Tool-tip',
    components: {
        ToolTip,
    },
    data() {
        return {
            one: `<tool-tip position="top">
    <template v-slot:title>
        tooltip title content
    </template>
    <template v-slot:content>
       Inside the tool tip component content pop up section
    </template>
</tool-tip>`,
two: `<template>
    <div class="tooltip">
        <div class="tooltip__title" 
        @mouseenter="tooltipToggle"
        @mouseleave="tooltipToggle">
        <div class="tooltip__title__text">
            <slot name="title"></slot>
        </div>
        <transition name="fade">
            <div class="tooltip__content"
             :class="'tooltip__content--' + position"
            v-show="show">
            <span class="tooltip__arrow"></span>
                <slot name="content"> </slot>
            </div>
          </transition>
        </div>
      
    </div>
</template>`,
three: `export default {
    name: 'ToolTip',
    props: {
        position: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        tooltipToggle() {
            this.show = !this.show;
        }
    }
}`, four: `.tooltip {
        display:inline-block;

        &__arrow {
            width: 20px;
            height: 20px;
            background-color: #d6d6d6;
            display: block;
            position: absolute;
            top: 0px;
            left: 50%;
            transform: rotate(45deg) translate(-50%);
        }

        &__title {
            position: relative;
            &__text {
            cursor:pointer;
            text-decoration:  underline;
            color: #8234fc;
            }
           
        }

        &__content {
            position: absolute;
            background-color: #d6d6d6;
            padding: 10px;
            border-radius: 10px;
            min-width: 350px;
            left: 50%;
            -webkit-transform: translate(-50%);
            transform: translate(-50%);
            top: 35px;
            z-index: 5;

            &--top {
                bottom: 40px;
                top: unset;
            }
            &--right {
                left: 115%;
                top: 50%;
                transform: translateY(-50%);
            }
            &--left {
                right: 115%;
                left:unset;
                top: 50%;
                transform: translateY(-50%);
            }
        }

    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.tooltip__content--top .tooltip__arrow {
    top: unset;
    bottom: -15px;
}

.tooltip__content--right .tooltip__arrow {
      top: 50%;
    left: -9px;
    transform: translateY(-50%) rotate(45deg);
}

.tooltip__content--left .tooltip__arrow {
    top: 50%;
    right: -9px;
    left: unset;
    transform: translateY(-50%) rotate(45deg);
}`
        }
    }
}
</script>