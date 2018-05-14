
const apply = require('postcss-apply');
const colorFunction = require('postcss-color-function');
const cssImport = require('postcss-import');
const cssNano = require('cssnano');
const cssNext = require('postcss-cssnext');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const nested = require('postcss-nested');
const path = require('path');
const styleLint = require('stylelint');
const svgSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  performance: {
    hints: false
  },

  devtool: 'eval-source-map',

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|gif)$/,
        exclude: /(node_modules)/,
        loader: 'file-loader',
        options: {
          name: 'img/[hash].[ext]',
        },
      },

      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /(node_modules)/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },

      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              sourceMap: 'inline',
              plugins: () => [
                cssImport(),
                styleLint,
                apply,
                nested,
                colorFunction(),
                cssNext({
                  browsers: ['last 2 versions']
                }),
                cssNano({
                  autoprefixer: false
                })
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),

    new svgSpritemapPlugin({
      filename: 'icons.svg',
      prefix: '',
      src: './src/assets/icons/**/*.svg'
    }),

    new htmlWebpackPlugin({
      favicon: './src/assets/img/favicon.ico',
      template: './src/index.html'
    })
  ]
}
