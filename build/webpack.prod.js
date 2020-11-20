const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  devtool: 'eval',
}

module.exports = merge(commonConfig, prodConfig)