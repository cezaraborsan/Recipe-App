<template>
  <div class="searchComponent">
    <div class="backgroundImage"></div>
    <form @submit.prevent="handleSearch">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search a recipe..."
      />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      loading: false,
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.searchTerm);
      this.searchTerm = "";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

.searchComponent {
  font-family: "DM Sans", sans-serif;
  // background-color: #a7727d;
  background-image: url("../assets/searchbar-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 28vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.searchComponent:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  cursor: pointer;
}

h1 {
  font-size: 4rem;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  z-index: 1000;
}

input[type="text"] {
  font-family: "DM Sans", sans-serif;
  padding: 20px 10px 20px 25px;
  border: 1px solid #ccc;
  width: 35vw;
  margin-right: 10px;
  border-radius: 50px;
  background-color: #f9f5e7;
  max-width: 1200px;
}

button {
  font-family: "DM Sans", sans-serif;
  padding: 20px 25px;
  border: none;
  font-weight: bold;
  background-color: #f9f5e7;
  color: rgba(44, 62, 80, 0.8);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 50px;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    margin: 10px 0;
  }
}

@media (max-width: 700px) {
  input[type="text"] {
    padding: 10px 10px 10px 25px;
    width: 60vw;
  }
  button {
    padding: 10px;
    font-weight: 500;
    text-transform: lowercase;
  }
}
</style>
