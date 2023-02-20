<template>
  <nav>
    <div class="logo">
      <router-link to="/" @click="pageReload">Recipes</router-link>
    </div>
    <div class="links">
      <router-link class="router" to="/">Food</router-link>
      <router-link class="router" to="/drinks">Drinks</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    pageReload() {
      window.location.href = "https://cezaraborsan.github.io/Recipe-App/#/";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

nav {
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  padding: 0.5rem 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #aa5656;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 99999;
  top: 0;
  max-width: 100%;

  .logo {
    font-family: "Dancing Script", sans-serif;
    font-size: 35px;
    font-weight: 700;
  }
}

.router {
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
}

.router:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #aa5656;
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
}

.router:hover:after {
  transform: scaleX(1);
}

.links {
  margin-top: 12px;
}

a {
  color: #aa5656;
  text-decoration: none;
  margin-right: 25px;
  font-weight: bold;
}

@media (max-width: 600px) {
  nav {
    padding: 0.5rem 1.5rem;
  }

  .router:nth-child(2) {
    margin-right: 0;
  }
}
</style>
