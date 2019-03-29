<template>
  <div>{{movie.title}}</div>
</template>

<script>
export default {
  name: "MoviesList",
  data() { // Initialize state
    return {
      movie: {} 
    }
  },
  created: function() { // Lifecycle method for component
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=a303f2f5d7ca8203094d13ff904f520a');
        this.movie = await res.json();
        return movie;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
</style>

