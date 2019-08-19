var path = require('path');
module.exports = {
  publicPath: '/vue-port',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/scss/main.scss";
          `,
      },
    },
  },
};
