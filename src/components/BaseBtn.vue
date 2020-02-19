<template>
    <component :is="type" :href="href" v-on="$listeners" class="btn btn--raised">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: null
        }
    },
    computed: {
        type() {
            if (this.href) {
                return "a";
            } else {
                return "button";
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.btn {
    cursor: pointer;
    color: #fff;
    background-color: #6200ee;
    padding: 0 16px 0 16px;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    height: 36px;
    border: none;
    outline: none;
    line-height: inherit;
    user-select: none;
    -webkit-appearance: none;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 4px;

    &--raised {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
}
</style>