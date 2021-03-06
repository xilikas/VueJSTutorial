import Vue from "vue";
import Router from "vue-router";

import MoviesList from "./components/MoviesList";
import MovieDetail from "@/components/MovieDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      // On home page, load specified component
      path: "/",
      name: "Movies List",
      component: MoviesList
    },
    {
      // On home page, load specified component
      path: "/movie/:id",
      name: "Movies Detail",
      component: MovieDetail
    }
  ]
});
