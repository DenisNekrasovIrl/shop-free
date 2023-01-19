/* eslint no-undef: off */ // --> OFF
/* eslint @typescript-eslint/no-var-requires: off */ // --> OFF
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  isDevelopment,
  isProduction,
};
