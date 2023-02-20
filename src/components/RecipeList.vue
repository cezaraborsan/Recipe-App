<template>
  <div class="list-container">
    <div class="card-list">
      <template v-if="recipes.length">
        <RecipeCard
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </template>
      <template v-else>
        <p>No recipe found.</p>
      </template>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";

export default {
  components: {
    RecipeCard,
  },
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.list-container {
  display: flex;
  justify-content: center;
  max-width: 2200px;
  margin: 0 auto;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
