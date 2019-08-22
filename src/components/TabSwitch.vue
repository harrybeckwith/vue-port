<template>
    <div class="tabs">
        <div class="tabs__top">
            <div class="tabs__tab" 
            v-for="(tab, i) in tabData" 
            :key="i"
             @click="toggleTab(i)"
             :class="{tabs__active: current === i}">
                    {{ tab }}
            </div>
        </div>
       <div class="tabs__content">
           <div v-for="(tab, i) in tabData" 
           :key="i">
            <slot :name="i" v-if="current === i"></slot>
           </div >
       </div>
    </div>
</template>
<script>
export default {
    props: {
        tabData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            current: 0,
        }
    },
    methods: {
        toggleTab(i) {
            this.current = i;
        }
    }

}
</script>
<style lang="scss" scoped>
        .tabs {
             max-width: 500px;
            &__top {
                display:flex;
                background: grey;
               
            }

            &__tab {
                margin-right: 20px;
                cursor: pointer;
                padding: 10px;
                margin: 0;
                transition: background-color .3s linear;
            }

            &__active {
                background-color: whitesmoke;
                color: orange;
            }
            &__content {
                padding: 10px;
                border: 1px solid black;
            }
        }
</style>