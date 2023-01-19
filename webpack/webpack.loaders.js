const { fileNameAssets } = require('./webpack.utils');
const { isProduction } = require('./webpack.mode');
const loaders = [
  {
    test: /\.(png|jpe?g|svg|gif)$/,
    generator: {
      filename: `assets/images/${fileNameAssets()}`,
    },
    type: 'asset/resource',
    use:
      (isProduction && [
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75,
            },
          },
        },
      ]) ||
      [],
  },
  {
    test: /\.(ttf|woff|woff2|eot)$/,
    generator: {
      filename: `assets/fonts/${fileNameAssets()}`,
    },
    type: 'asset/resource',
  },
  {
    test: /\.(jsx?|tsx?)$/,
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
    loader: 'babel-loader',
  },
];
module.exports = loaders;
