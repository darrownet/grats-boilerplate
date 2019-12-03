const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {resolve} = require('path');
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/bundle.min.js',
    path: resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: true,
      parallel: true,
      terserOptions: {
        compress: {
          drop_console: true
        },
        ecma: 6,
        mangle: true,
      },
    })],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, '../../src/server/server.js'),
        to: resolve(__dirname, '../../build/server.js')
      }
    ]),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../src/index.html'),
      filename: './templates/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
