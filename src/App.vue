<template>
  <div class="app-container">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
.app-container {
  margin: 0 auto;
  width: 100vw;
  max-width: 1900px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 375px;
}

.recipe-list {
  flex: 1 0 auto;
  margin-bottom: 3rem;
}

.footer {
  margin-top: auto;
}
</style>
