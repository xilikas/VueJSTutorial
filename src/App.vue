<template>
  <div id="app" v-if="status === 'Ready'">
    <Header :title="title"/>
    <img width="25%" src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
  </div>
  <div v-else-if="status === 'Loading'">Loading</div>
  <div v-else>Error</div>
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
      isTrue: false,
      status: "Loading"
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
