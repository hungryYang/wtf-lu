const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'wtf-lu',
    libraryTarget: "umd"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.tsx?&/,
      loader: 'awesome-typescript-loader',
    }]
  }
}
