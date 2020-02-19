<template>
    <div>
        <h1 class="title">Button</h1>
        <base-btn @click="btnClick">Button</base-btn>
        <p>Click the button above 👆</p>
        <h3 class="italic title--page">How to make a reusable button using dynamic components...</h3>
        <p>A button can have many different use cases, you may want the button to be a link to external sites or just a button without a link to toggle something on the page.</p>
        <p>Using dynamic components you can pass as props the type of you would like, either a button tag or a tag.</p>
        <h3 class="italic title--page">Inside Button.vue template</h3>
        <prism language="javascript">{{one}}</prism>
        <p class="bold italic">:is</p>
        <p>Can be used to swap the component out for a completely new component, in this case we are switching between either a tag or button tag. This is very simple and has many use cases.</p>
        <p class="bold italic">:href</p>
        <p>Is the link we want to use, passing this lets the component know through the computed property that it will be a link being used and adds this to :is, creating the link tag.</p>
        <p class="bold italic">v-on="$listeners"</p>
        <p>Allows the component to be passed any methods from the parent and work.</p>
        <p class="bold italic">slot</p>
        <p>Allows text to be passed for the btn text.</p>
        <h3 class="italic title--page">Inside Button.vue script</h3>
        <prism language="javascript">{{two}}</prism>
        <p class="bold italic">props</p>
        <p>The string for the href set up set to null to begin with, if used an a tag will be generated.</p>
        <p class="bold italic">computed - type</p>
        <p>Returns either "a" or "button" (a link or button tag), based on if a href props is passed. Which creates the dynamic component through the :is</p>
        <h3 class="italic title--page">Inside Button.vue styles</h3>
        <prism language="javascript">{{three}}</prism>
        <p>Some basic styling to create a material design button look.</p>
        <h3 class="italic title--page">App.vue - Template</h3>
        <prism language="javascript">{{four}}</prism>
        <p>
            As we have used
            <span class="bold italic">v-on="$listeners"</span>
            we can bind click methods - in this case an alert for test purposes.
        </p>
        <p>Between the button component tags we can pass anything we like and this will display inside the button using slots.</p>
        <h3 class="italic title--page">App.vue - Script</h3>
        <prism language="javascript">{{five}}</prism>
        <p>A small methods to show that you can attach listener events to the button.</p>
        <p>For router links you could use the click method and place this.$router.push('/page') inside to go to internal page using the router.</p>
        <p>Using dynamic components adds flexibility to components and reduces the amount of markup inside template as computed can be used to switch :to, this could be used in many cases, a button is a good basic example. 🖖</p>
    </div>
</template>

<script>
import BaseBtn from "../components/BaseBtn.vue";
export default {
    components: {
        BaseBtn
    },
    metaInfo: {
        // Children can override the title.
        title: "Vue js tips",
        // Result: My Page Title ← My Site
        // If a child changes the title to "My Other Page Title",
        // it will become: My Other Page Title ← My Site
        titleTemplate: "%s ← Button",
        // Define meta tags here.
        meta: [
            {
                name:
                    "A button can have many different use cases, you may want the button to be a link to external sites or just a button without a link to toggle something on the page."
            }
        ]
    },
    data() {
        return {
            one: `<template>
    <component :is="type" :href="href" v-on="$listeners" class="btn btn--raised">
        <slot></slot>
    </component>
</template>`,
            two: `export default {
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
};`,
            three: `<style lang="scss" scoped>
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
</style>`,
            four: `<template>
    <base-btn @click="btnClick">Button</base-btn>
</template>`,
            five: `methods: {
        btnClick() {
            alert("hello button!");
            // could push to router from here to change page internally
            // else pass a href as props to component
        }
    }`
        };
    },
    methods: {
        btnClick() {
            alert("hello button!");
            // could push to router from here to change page internally
            // else pass a href as props to component
        }
    }
};
</script>

<style>
</style>