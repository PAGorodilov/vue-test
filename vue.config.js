const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue Test',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_colors.scss";
          @import "@/scss/_fonts.scss";
        `,
      },
    },
  },
})
