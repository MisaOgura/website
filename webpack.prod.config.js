const config = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-redux': 'ReactRedux',
  'redux': 'Redux'
}

config.devtool = 'cheap-source-map'

config.plugins.push(new UglifyJSPlugin({
  sourceMap: true,
  compressor: {
    warnings: false
  },
  comments: false
}))

module.exports = config
