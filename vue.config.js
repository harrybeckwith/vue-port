var path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-port/'
    : '/',
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
