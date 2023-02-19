import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView";
import DrinkView from "../views/DrinkView";
import MealRecipeView from "../views/MealRecipeView";
import DrinkRecipeView from "../views/DrinkRecipeView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/drinks",
    name: "drinks",
    component: DrinkView,
  },

  {
    path: "/drink-recipe/:id",
    name: "DrinkRecipeView",
    component: DrinkRecipeView,
    props: true,
  },

  {
    path: "/meal-recipe/:id",
    name: "MealRecipeView",
    component: MealRecipeView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
