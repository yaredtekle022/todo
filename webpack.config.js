const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'asset/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    compress: true,
    port: 8080,
  },
};
