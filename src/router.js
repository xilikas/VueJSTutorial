import Vue from "vue";
import Router from "vue-router";

import MoviesList from "./components/MoviesList";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      // On home page, load specified component
      path: "/",
      name: "Movies List",
      component: MoviesList
    }
  ]
});
