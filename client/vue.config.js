const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/styles";`,
      },
    },
  },
  /* devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  }, */
};
