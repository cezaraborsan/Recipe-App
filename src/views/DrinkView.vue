<template>
  <div>
    <SearchBar @search="updateSearchTerm" />
    <RecipeList :recipes="recipes" />
  </div>
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
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        this.recipes = response.data.drinks;
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
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchTerm}`
          ),
          axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.searchTerm}`
          ),
          axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${this.searchTerm}`
          ),
          axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.searchTerm}`
          ),
        ])
          .then((responses) => {
            let drinks = [];
            responses.forEach((response) => {
              if (response.data.drinks) {
                drinks = [...drinks, ...response.data.drinks];
              }
            });
            this.recipes = drinks;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
