const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    path: path.resolve(__dirname, './js/dashboard_main.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ['file-loader'],
      },
    ],
  },

  performance: {
    maxAssetSize: 900 * 1024,
  },
};
