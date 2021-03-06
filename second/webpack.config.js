const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     }
// }

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'ownWebpack Title',
    filename: 'ownWebpack.html',
    template: './src/my-owntemplate.ejs',
    minify: {
        collapseWhitespace: true
    },
    hash: true
  })]
};