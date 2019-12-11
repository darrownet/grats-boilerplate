const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: resolve(__dirname, '../../src'),
  entry: ['./index.tsx', './styles/styles.scss'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loaders: ['awesome-typescript-loader?tsconfig=../typescript/tsconfig.json'],
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
