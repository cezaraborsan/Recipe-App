<template>
  <SearchBar @search="updateSearchTerm" />
  <RecipeList :recipes="recipes" class="recipe-list" />
</template>

<script>
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import axios from "axios";

export default {
  components: {
    SearchBar,
    RecipeList,
  },
  data() {
    return {
      searchTerm: "",
      recipes: [],
    };
  },

  mounted() {
    axios
      .get("https://www.themealDB.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        this.recipes = response.data.meals;
      });
  },

  methods: {
    updateSearchTerm(searchTerm) {
      this.searchTerm = searchTerm;
      this.fetchRecipes();
    },
    fetchRecipes() {
      if (this.searchTerm) {
        Promise.all([
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchTerm}`
          ),
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.searchTerm}`
          ),
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.searchTerm}`
          ),
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.searchTerm}`
          ),
        ])
          .then((responses) => {
            let meals = [];
            responses.forEach((response) => {
              if (response.data.meals) {
                meals = [...meals, ...response.data.meals];
              }
            });
            this.recipes = meals;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
