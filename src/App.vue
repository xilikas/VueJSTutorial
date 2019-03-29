<template>
  <div id="app">
    <Header :title="title"/>
    <img width="25%" src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <ul>
      <li v-for="(item, index) in list">{{index + 1}}: {{item}}</li>
      <li v-for="person in people">{{person.name}}</li>
      <li v-for="(value, key) in profile">{{key}}: {{value}}</li>
    </ul>
    <HelloWorld :key="person.id" v-for="person in people" msg="Hello World"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
      hello: "Hello World",
      title: "Vue Movie DB",
      list: ["Penguin", "Turtle", "Red Panda"],
      people: [
        {
          id: 1,
          name: "Fil"
        },
        {
          id: 2,
          name: "Natalie"
        }
      ],
      profile: {
        name: "Fil",
        age: "25",
        job: "Developer"
      }
    };
  },
  components: {
    HelloWorld,
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
