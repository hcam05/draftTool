const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {

  context: path.join(__dirname, '../app/app'),
  entry: [
    hotMiddlewareScript,
    '../app.jsx',
  ],
  output: {
    path: path.join(__dirname, '../www/assets'),
    // filename: '[name].[chunkhash].js', // Do not use in dev
    filename: '[name].js',
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
    new HtmlWebpackPlugin({ template: '../../www/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};