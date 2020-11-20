const wbepack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  // devtool: 'cheap-eval-source-map',
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    port: 9000,
    open: true,
    hot: true
  },
  plugins: [
    new wbepack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig)