<template>
  <div id="app">
    <Header :title="title"/>
    <img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello World"/>
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
      title: "Vue Movie DB"
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
