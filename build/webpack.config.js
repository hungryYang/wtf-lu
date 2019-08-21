const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/lib'),
    library: 'wtf-lu',
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }, {
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
}
