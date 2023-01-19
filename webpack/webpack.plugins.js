/* eslint no-undef: off */ // --> OFF
/* eslint @typescript-eslint/no-var-requires: off */ // --> OFF
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { isProduction } = require('./webpack.mode');
const plugins = [
  new HTMLWebpackPlugin({
    template: './public/index.html',
    minify: {
      collapseWhitespace: isProduction,
    },
  }),
];
module.exports = plugins;
