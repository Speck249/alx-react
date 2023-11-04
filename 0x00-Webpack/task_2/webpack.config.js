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
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, 
              disable: process.env.NODE_ENV === 'production', // Disable in production
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // Optimize PNG images with pngquant
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              // Optimize GIF images
              gifsicle: {
                interlaced: false,
              },
              // Optimize SVG images
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { removeEmptyAttrs: false },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
