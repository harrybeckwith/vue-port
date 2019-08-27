<template>
    <div>
        <h1 class="title italic">Tabs - switching content</h1>
        <TabSwitch :tabData="tabs" class="gap__md">
            <template v-slot:0>
                <p>Some content not a component! 🥳 The next two tabs are components with their data passed in.</p>
            </template>
            <template v-slot:1>
                <AccordionDropdown :accordionData="accordionInfo" />
            </template>
            <template v-slot:2>
                <lightbox :lightboxInfo="lightboxData" />
            </template>
        </TabSwitch>
        <p class="italic">Click the above tabs to see the content for each 👆</p>
        <p>Tabs can be used for grouping content together and saving space on the page - also making the page more engaging.</p>
        <p class="bold italic">What data do we need to pass?</p>

        <ul class="list list--bullet">
            <li>An array of tabs</li>
        </ul>
        <prism language="javascript">
            data() {
            return {
            tabs: ['tab 1', 'tab 2', 'tab 3'],
            }
            }
        </prism>
        <h3 class="italic title--page">Named slots</h3>
        <p>As you can see the only data needed to be passed is the tabs. The content is passed by creating named slots.</p>
        <p>Lets look at the parent component with the tabSwitch component.</p>
        <prism language="javascript">{{one}}</prism>
        <p>We have to pass in named slots with v-slot:0 zero matching the first tab, 1 matching the second tab from the tabs data.</p>
        <p>Inside the template tag with can pass anything we like, components or static content, in this case we have two components with data bound to them and some static content.</p>
        <p>Lets look inside the TabSwitch component to see how this is displayed and linked to the tabs being clicked.</p>
        <h3 class="italic title--page">Inside TabSwitch component - template</h3>
        <prism language="javascript">{{two}}</prism>
        <p class="strong italic">what is happening inside this template:</p>
        <ul class="list list--bullet">
            <li>A loop from the tabs data - creates each tab item.</li>
            <li>A method toggleTab gets the current index when clicked - which set the current data to match the index.</li>
            <li>An active class based on the current index and clicked tab - if a match active class is added.</li>
            <li>A loop based on the number of tabs - passing in the index to the slot name.</li>
            <li>An if statement to display the tab matching the current tab clicked.</li>
        </ul>
        <h3 class="italic title--page">Inside TabSwitch component - script</h3>
        <prism language="javascript">{{three}}</prism>
        <p class="strong italic">what is happening inside this script:</p>
        <ul class="list list--bullet">
            <li>props are set for the tabs array</li>
            <li>current is set to 0 - being the first tab</li>
            <li>toggleTab method takes the index and sets the current data - which updates to display active and the matching tab.</li>
        </ul>
        <p>With this solution, it does mean, having to name the slots a number that matches the index of the array item. Maybe there is a more dynamic solution.</p>
        <p>That's the complete code to create tabs using named slots. 😁</p>
    </div>
</template>

<script>
import TabSwitch from "../components/TabSwitch.vue";
import Lightbox from "../components/Lightbox.vue";
import AccordionDropdown from "../components/AccordionDropdown.vue";
export default {
    name: "Tabs",
    components: {
        TabSwitch,
        Lightbox,
        AccordionDropdown
    },
    metaInfo: {
        // Children can override the title.
        title: "Vue js tips",
        // Result: My Page Title ← My Site
        // If a child changes the title to "My Other Page Title",
        // it will become: My Other Page Title ← My Site
        titleTemplate: "%s ← Tabs",
        // Define meta tags here.
        meta: [
            {
                name:
                    "Tabs can be used for grouping content together and saving space on the page - also making the page more engaging."
            }
        ]
    },
    data() {
        return {
            tabs: ["tab 1", "tab 2", "tab 3"],
            lightboxData: [
                {
                    thumbnail: "1.jpg",
                    alt: "thumbnail 1",
                    lb: "lb/1.jpg",
                    caption: "title one"
                },
                {
                    thumbnail: "2.jpg",
                    alt: "thumbnail 2",
                    lb: "lb/2.jpg",
                    caption: "title two"
                },
                {
                    thumbnail: "3.jpg",
                    alt: "thumbnail 3",
                    lb: "lb/3.jpg",
                    caption: "title 3"
                },
                {
                    thumbnail: "4.jpg",
                    alt: "thumbnail 4",
                    lb: "lb/4.jpg",
                    caption: "title 4"
                }
            ],
            accordionInfo: [
                {
                    title: "Lorem ipsum dolor sit amet?",
                    content:
                        "onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna."
                },
                {
                    title: "Lorem ipsum dolor sit amet?",
                    content:
                        "onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna."
                },
                {
                    title: "Lorem ipsum dolor sit amet?",
                    content:
                        "onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna."
                },
                {
                    title: "Lorem ipsum dolor sit amet?",
                    content:
                        "onsectetur adipiscing elit. Donec at iaculis eros, quis laoreet magna. Sed at commodo est. Nullam semper vehicula dui, ut pulvinar ex sodales a. Duis maximus nec orci ut iaculis. Proin finibus, lacus ac mollis dapibus, justo nisi molestie massa, nec tincidunt nisi est vel sapien. Vivamus id est euismod, aliquet ligula id, hendrerit urna."
                }
            ],
            one: `<TabSwitch :tabData="tabs">
    <template v-slot:0><p>Some content not a component! 🥳 The next two tabs are componets with their data passed in. </p></template> 
    <template v-slot:1><AccordionDropdown :accordionData ="accordionInfo"/></template>
    <template v-slot:2><lightbox :lightboxInfo="lightboxData"/></template>
</TabSwitch>`,
            two: `<template>
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
</template>`,
            three: `export default {
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

}`
        };
    }
};
</script>