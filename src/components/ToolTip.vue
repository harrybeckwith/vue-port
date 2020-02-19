<template>
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
</template>
<script>

export default {
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
}
</script>
<style lang="scss" scoped>
    .tooltip {
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
}

</style>