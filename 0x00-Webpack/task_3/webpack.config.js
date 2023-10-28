const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devtool: 'inline-source-map',
  devServer: {
    port: 8564,
    contentBase: path.resolve(__dirname, 'public'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
