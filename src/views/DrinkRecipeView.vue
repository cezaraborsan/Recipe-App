<template>
  <div class="recipe-info-container">
    <h1>{{ recipe.strDrink }}</h1>
    <p class="category">
      <span> {{ recipe.strCategory }} </span>
      <span> {{ recipe.strAlcoholic }}</span>
    </p>
    <div class="details">
      <div class="img">
        <img :src="recipe.strDrinkThumb" alt="Meal Image" />
      </div>
      <div class="instructions">
        <h3>Instructions:</h3>
        <p class="instructions-paragraph">{{ recipe.strInstructions }}</p>
        <h3 class="ingredients-title">Ingredients:</h3>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">
            <input type="checkbox" :value="ingredient" />
            {{ ingredient }}
          </li>
        </ul>
        <template v-if="recipe.strVideo">
          <a :href="recipe.strVideo" target="_blank">
            <button class="recipe-btn">Video</button>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipe: null,
    };
  },
  computed: {
    ingredients() {
      let ingredients = [];
      for (let i = 1; i <= 20; i++) {
        let ingredient = this.recipe[`strIngredient${i}`];
        let measure = this.recipe[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push(` ${ingredient} - ${measure}`);
        }
      }
      return ingredients;
    },
  },
  created() {
    let recipeData = JSON.parse(localStorage.getItem(`drink-${this.id}`));
    if (recipeData) {
      this.recipe = recipeData;
    } else {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`
        )
        .then((response) => {
          this.recipe = response.data.drinks[0];
          localStorage.setItem(`drink-${this.id}`, JSON.stringify(this.recipe));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
};
</script>

<style scoped>
@import "/src/assets/recipe-info-styles.scss";
</style>
