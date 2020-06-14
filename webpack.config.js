const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
      { 
        test: /\.(html)$/, 
        use: 'html-loader'
      },
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};