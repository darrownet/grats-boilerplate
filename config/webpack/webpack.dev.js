const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const dotenv = require('dotenv').config({path: resolve(__dirname, '../../.env')});
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  target: "web",
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: resolve(__dirname, '../../src/client'),
    port: dotenv.parsed.DEV_PORT,
    historyApiFallback: true,
    hot: true,
    https: false,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/graphql': `http://localhost:${dotenv.parsed.GQL_PORT}/graphql`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../src/index.html'),
      inject: true
    })
  ]
});
