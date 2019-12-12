const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: resolve(__dirname, '../../src'),
  entry: ['./index.jsx', './styles/styles.scss'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              outputPath: './images',
              publicPath: '/images',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new Dotenv({
      path: resolve(__dirname, '../../.env')
    })
  ]
};
