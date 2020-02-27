<template>
  <div>
    <h1 class="title">Computed</h1>
    <p>
      Using a computed property can reduce the template size and increase efficiency.
      You can use use a method that performs some logic and returns a value having the
      same outcome as a computed property.
    </p>
    <h3 class="italic title title--page">Why use Computed Properties?</h3>
    <ul class="list list--bullet">
      <li>reduce template size</li>
      <li>increase efficiency</li>
    </ul>
    <h3 class="italic title title--pagec">Lets look at a computed property</h3>
    <prism language="javascript">{{ one }}</prism>
    <p class="italic title title--pagec">Inside template</p>
    <prism language="javascript">{{ two }}</prism>
    <p>We can see how to reference the computed property so that it displays.
        This of course could be achieved with a method. So why use computed?
    </p>
    <p>Using computed we can make sure that unless there is a change in the 'message' data the call to the computed function will not be made.
        Using a method, the call is made each time the page is loaded. As computed using caching it does not need to make the call again. Knowing this
        we can see the performance difference and how computed is more efficient.
    </p>
     <h3 class="italic title title--page">Can you pass an argument to a computed property?</h3>
     <p>You can't pass an argument, which means this is where a method would be needed. For example you can only do the below with a method.</p>
     <p class="italic bold">script</p>
    <prism language="javascript">{{ three }}</prism>
     <p class="italic bold">template</p>
    <prism language="javascript">{{ four }}</prism>
     <h3 class="italic title title--page">Summary</h3>
     <p>Computed properties are a effienct way to reduce template size and load time. They can be used in a number of ways
         methods become into play once an argument is needed.</p>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      one: `data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }`,
  two: `<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>`,
three: `methods: {
      calcSize(val) {
          return val * 2
      }
  }`,
  four: `{{ calcSize(5) }}`
    };
  },

};
</script>

<style>
</style>