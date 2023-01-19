/* eslint no-undef: off */ // --> OFF
/* eslint @typescript-eslint/no-var-requires: off */ // --> OFF
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { isDevelopment, isProduction } = require('./webpack.mode');
const fileName = (ext) => (isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`);
const fileNameAssets = () => (isDevelopment ? '[name][ext]' : '[name].[hash][ext]');
const optimization = isProduction
  ? {
      splitChunks: {
        chunks: 'all',
      },
    }
  : {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [new TerserWebpackPlugin()],
    };

module.exports = {
  fileName,
  fileNameAssets,
  optimization,
};
