const path = require('path')
module.exports = {
  devtool: 'source-map',
  entry: {
    index: './lib/example.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist/lib'),
    library: 'wtf-lu',
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../lib/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /icons.+\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
}
