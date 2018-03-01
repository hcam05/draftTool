const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '../app/app'),
  entry: [
    '../app.js',
  ],
  output: {
    path: path.join(__dirname, '../www/assets'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../../www/index.html'
    })
  ],
};