// const path = require('path');
// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
  },
  devtool: 'source-map',

  // Spin up a server for quick development
  // devServer: {
  //   historyApiFallback: true,
  //   static: {
  //     directory: path.join(__dirname, '/dist'),
  //   },
  //   open: true,
  //   compress: true,
  //   port: 8888,
  //   hot: true
  // },

  // plugins: [
  //   // Only update what has changed on hot reload
  //   new webpack.HotModuleReplacementPlugin(),
  // ],
});
