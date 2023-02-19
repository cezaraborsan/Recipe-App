<template>
  <div class="recipe-info-container">
    <h1>{{ recipe.strMeal }}</h1>
    <p class="category" v-if="recipe.strCategory || recipe.strArea">
      <span> {{ recipe.strCategory }} </span>
      <span> {{ recipe.strArea }}</span>
    </p>
    <div class="details">
      <div class="img">
        <img :src="recipe.strMealThumb" alt="Meal Image" />
        <h3 id="ingredients-title">Ingredients:</h3>
        <ul class="ingredients-list">
          <li v-for="ingredient in ingredients" :key="ingredient">
            <input type="checkbox" :value="ingredient" />
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="instructions">
        <h3 id="instructions-title">Instructions:</h3>
        <p class="instructions-paragraph">{{ recipe.strInstructions }}</p>
        <template v-if="recipe.strYoutube">
          <a :href="recipe.strYoutube" target="_blank">
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
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`)
      .then((response) => {
        this.recipe = response.data.meals[0];
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
@import "/src/assets/recipe-info-style.css";
</style>
