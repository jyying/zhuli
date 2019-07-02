const path = require('path')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const exWebpack = isDev ?
  require('./webpack.dev') :
  require('./webpack.prod')
const _webpack = {
  entry: {
    index: path.resolve('src/entry/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: isDev ? '/' : './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          "babel-loader",
          "eslint-loader"
        ]
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/config/icons.js')
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'name',
      template: path.resolve(__dirname, '../src/entry/index.html')
    }),
  ]
}

module.exports = merge(_webpack, exWebpack)