<template>
  <transition name="fade">
    <div class="movie-wrapper" :style="styles">
      <div class="movie-info">
        <h1>{{movie.title}}</h1>
        <h3>Release Date: {{movie.release_date}}</h3>
        <p>{{movie.overview}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

export default {
  data() {
    return {
      movie: {}
    };
  },
  created: function() {
    this.fetchMovie();
  },
  computed: {
    styles() {
      const { backdrop_path } = this.movie;
      return {
        background: `url(${BACKDROP_PATH}${backdrop_path}) no-repeat`
      };
    }
  },
  methods: {
    fetchMovie: async function() {
      try {
        const movieId = this.$route.params.id;
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=a303f2f5d7ca8203094d13ff904f520a`
        );
        const movie = await res.json();
        this.movie = movie;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
.movie-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover;
}

.movie-info {
  background: white;
  color: #222;
  padding: 2rem 10%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>


