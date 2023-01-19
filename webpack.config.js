const path = require('path');
const loaders = require('./webpack/webpack.loaders');
const { isDevelopment } = require('./webpack/webpack.mode');
const plugins = require('./webpack/webpack.plugins');
const { fileName, optimization } = require('./webpack/webpack.utils');
module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.tsx')],

  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  plugins: [...plugins],
  module: {
    rules: [...loaders],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization,
  devServer: {
    port: 8080,
    hot: isDevelopment,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/dist'),
    },
  },
};
