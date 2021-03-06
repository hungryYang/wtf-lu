const baseConfig = require('./webpack.config')
module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
})
