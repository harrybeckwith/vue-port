<template>
  <div>
    <h1 class="title">Higer order functions</h1>
    <h3 class="page page--title">What are higher order functions?</h3>
    <p>Higer-order functions are functions that take other functions as arguments or return functions as their results.</p>
    <p>
      Having the ability to pass functions into functions allows functions to become even more reusable. In order to make this possible, we want
      to write a function that can be passed in and be used on its own.
    </p>
    <p>To keep the code reusable and not locked in, we write simple functions that take care of one piece of logic.</p>
    <h3 class="title title--page">A basic higher oder function</h3>
    <prism language="javascript">{{ one }}</prism>
    <p>The above, places the double function inside the map function and performs one logical task to doulbe each item.</p>
    <h3 class="title title--page">
        More examples -  in Vue
    </h3>
    <p class="italic bold">
        Array of objects holding info about people
    </p>
    <prism language="javascript">{{  `people: [
        { name: "Mike", age: 18, gender: "M" },
        { name: "Debbie", age: 45, gender: "F" },
        { name: "Craig", age: 33, gender: "M" },
        { name: "Lew", age: 24, gender: "M" },
        { name: "Ethan", age: 43, gender: "M" },
        { name: "Paula", age: 81, gender: "F" },
        { name: "Donald", age: 52, gender: "M" },
        { name: "Jennifer", age: 88, gender: "F" },
        { name: "Courtney", age: 99, gender: "F" },
        { name: "Jane", age: 109, gender: "F" }
      ]` }}</prism>
    <p>
        Now we want to write a function that gets just the gender 'M';
    </p>
    <prism language="javascript">{{ two }}</prism>
    <p>Okay great we have a function that performs one piece of logic. Lets create another function which we can pass this function into to get all 'm'. The below returns
        an array with only gender m objects.
    </p>
    <prism language="javascript">{{ three }}</prism>
    <p>Now we can combine the two to get all 'm' gender males. To call the function we can inside created like so</p>
    <prism language="javascript">{{ four }}</prism>
    <p> Now we have stored in our data all people with the gender 'm'.</p>
    <p class="italic">Combining a few more higher order functions we can start to break down the data by using small functions
        that can be passed around avoiding bugs and helping maintainability.
    </p>
    <p>Below is more code that links to the examples, you sould be able to see how using higer functions in Vue is beneficial especially as an application grows in size.</p>
    <p class="italic bold">No explanation below - but includes examples above and builds upon those.</p>
    <p class="italic bold">script - inside app.vue</p>
    <prism language="javascript">{{ five }}</prism>
    <h3 class="italic bold">
        Summary
    </h3>
    <p>
        Keeping code in small one piece logic functions is a great way to keep code clean and bug free - which enables you to make use of higer-order functions.
    </p>
  </div>
</template>

<script>
export default {
  name: "HigerOrderFunctions",
  data() {
    return {
      one: `const double = n => n * 2;
[1,2,3,4].map(double); // [2,4,6,8]`,
two: ` isMale(person) {
      return person.gender === "M";
    }`,
    three: `getMales(people) {
      return people.filter(this.isMale);
    }`,
    four: `created() {
        this.male = this.getMales(this.people);
    }`,
    five: `
    data() {
        return {
    people: [
        { name: "Mike", age: 18, gender: "M" },
        { name: "Debbie", age: 45, gender: "F" },
        { name: "Craig", age: 33, gender: "M" },
        { name: "Lew", age: 24, gender: "M" },
        { name: "Ethan", age: 43, gender: "M" },
        { name: "Paula", age: 81, gender: "F" },
        { name: "Donald", age: 52, gender: "M" },
        { name: "Jennifer", age: 88, gender: "F" },
        { name: "Courtney", age: 99, gender: "F" },
        { name: "Jane", age: 109, gender: "F" }
      ],
      male: null,
      female: null,
      averageMale: null,
      averageFemale: null,
      maxAgeMale: null,
      maxAgeFemale: null,
      minAgeMale: null,
      minAgeFemale: null
    }
  }
  created() {
    this.male = this.getMales(this.people);
    this.female = this.getFemales(this.people);
    this.averageMale = this.average(this.getMales(this.people));
    this.averageFemale = this.average(this.getFemales(this.people));
    this.maxAgeMale = this.maxAge(this.getMales(this.people));
    this.maxAgeFemale = this.maxAge(this.getFemales(this.people));
    this.minAgeMale = this.minAge(this.getMales(this.people));
    this.minAgeFemale = this.minAge(this.getFemales(this.people));
  },
  methods: {
    isMale(person) {
      return person.gender === "M";
    },
    getMales(people) {
      return people.filter(this.isMale);
    },
    isFemale(person) {
      return person.gender === "F";
    },
    getFemales(people) {
      return people.filter(this.isFemale);
    },
    average(people) {
      return people.reduce((acc, curr) => acc + curr.age, 0) / people.length;
    },
    maxAge(people) {
      return Math.max(...people.map(person => person.age));
    },
    minAge(people) {
      return Math.min(...people.map(person => person.age));
    }
  }
  `,
      people: [
        { name: "Mike", age: 18, gender: "M" },
        { name: "Debbie", age: 45, gender: "F" },
        { name: "Craig", age: 33, gender: "M" },
        { name: "Lew", age: 24, gender: "M" },
        { name: "Ethan", age: 43, gender: "M" },
        { name: "Paula", age: 81, gender: "F" },
        { name: "Donald", age: 52, gender: "M" },
        { name: "Jennifer", age: 88, gender: "F" },
        { name: "Courtney", age: 99, gender: "F" },
        { name: "Jane", age: 109, gender: "F" }
      ],
      male: null,
      female: null,
      averageMale: null,
      averageFemale: null,
      maxAgeMale: null,
      maxAgeFemale: null,
      minAgeMale: null,
      minAgeFemale: null
    };
  },
  created() {
    this.male = this.getMales(this.people);
    this.female = this.getFemales(this.people);
    this.averageMale = this.average(this.getMales(this.people));
    this.averageFemale = this.average(this.getFemales(this.people));
    this.maxAgeMale = this.maxAge(this.getMales(this.people));
    this.maxAgeFemale = this.maxAge(this.getFemales(this.people));
    this.minAgeMale = this.minAge(this.getMales(this.people));
    this.minAgeFemale = this.minAge(this.getFemales(this.people));
  },
  methods: {
    isMale(person) {
      return person.gender === "M";
    },
    getMales(people) {
      return people.filter(this.isMale);
    },
    isFemale(person) {
      return person.gender === "F";
    },
    getFemales(people) {
      return people.filter(this.isFemale);
    },
    average(people) {
      return people.reduce((acc, curr) => acc + curr.age, 0) / people.length;
    },
    maxAge(people) {
      return Math.max(...people.map(person => person.age));
    },
    minAge(people) {
      return Math.min(...people.map(person => person.age));
    }
  },
      metaInfo: {
    // Children can override the title.
    title: 'Vue js tips',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← Higher-order functions',
    // Define meta tags here.
    meta: [
      {name: 'Higher-order functions', content: 'Learn what higher-order functions and how to use them in Vue js.'}
    ]
  }
};
</script>