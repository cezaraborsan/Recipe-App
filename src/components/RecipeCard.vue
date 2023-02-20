<template>
  <div class="card">
    <img :src="thumbnail" alt="Recipe Thumbnail" @click="openRecipe" />
    <div class="card-info">
      <div>
        <h3 @click="openRecipe">{{ name }}</h3>
        <p v-if="(category || area) && type === 'meal'" @click="openRecipe">
          <span> {{ category }} </span>
          <span> {{ area }}</span>
        </p>
        <p v-if="alcoholic && type === 'drink'" @click="openRecipe">
          <span> {{ category }} </span>
          <span> {{ alcoholic }} </span>
        </p>
      </div>
      <template v-if="video">
        <a :href="video" target="_blank">
          <button>
            <img src="../assets/video-icon.png" alt="video icon" />
          </button>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      type: "",
    };
  },

  computed: {
    thumbnail() {
      return this.recipe.strMealThumb || this.recipe.strDrinkThumb;
    },
    name() {
      return this.recipe.strMeal || this.recipe.strDrink;
    },
    category() {
      return this.recipe.strCategory || null;
    },
    area() {
      return this.recipe.strArea || null;
    },
    alcoholic() {
      return this.recipe.strAlcoholic || null;
    },
    video() {
      return this.recipe.strYoutube || this.recipe.strVideo;
    },
  },

  created() {
    if (this.recipe.strMeal) {
      this.type = "meal";
    } else if (this.recipe.strDrink) {
      this.type = "drink";
    }
  },

  methods: {
    openRecipe() {
      if (this.type === "meal") {
        this.$router.push({
          name: "MealRecipeView",
          params: { id: this.recipe.idMeal },
        });
      } else if (this.type === "drink") {
        this.$router.push({
          name: "DrinkRecipeView",
          params: { id: this.recipe.idDrink },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,300;0,8..144,500;1,8..144,300;1,8..144,400&display=swap");

.card {
  font-family: "Roboto Serif", sans-serif;
  width: 300px;
  margin: 1.5rem 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #596e59;

  .card-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      cursor: pointer;
      padding: 0;
      background-color: inherit;
      img {
        transition: all 0.4s;
        width: 35px;
      }

      &:hover {
        transform: translateX(3px);
      }
    }
  }

  span {
    display: inline;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #596e59;
    font-size: 12px;
  }

  .card-info h3 {
    font-size: 24px;
    margin: 0 0.6rem 0.8rem 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 250px;
    color: #596e59;

    &:hover {
      color: #475847;
    }
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transform: translateX(3px);
    }
  }
}
</style>
