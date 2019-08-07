const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')  //  压缩
module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
  ]
}