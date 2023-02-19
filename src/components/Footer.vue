<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Recipe App. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #f1dbbf;
  padding: 0.2rem;
  text-align: center;
  font-size: 0.8rem;
  color: #aa5656;
  margin-top: auto;
}
</style>
