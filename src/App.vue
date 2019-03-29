<template>
  <div id="app" v-if="status === 'Ready'">
    <Header :title="title"/>
    <MoviesList/>
  </div>
  <div v-else-if="status === 'Loading'">Loading</div>
  <div v-else>Error</div>
</template>

<script>
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";

export default {
  name: "App",
  data() {
    return {
      title: "Vue Movie DB",
      isTrue: false,
      status: "Ready"
    };
  },
  components: {
    Header,
    MoviesList
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
