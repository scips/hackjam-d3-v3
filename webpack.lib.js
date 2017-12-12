const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    hackjam: './src',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  externals: {
    d3: 'd3',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' }),
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
    ],
  },
  plugins: [new ExtractTextPlugin('style.css')],
};