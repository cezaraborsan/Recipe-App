const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/Recipe-App/" : "/",
  outputDir: "dist",
  assetsDir: "static",
});
