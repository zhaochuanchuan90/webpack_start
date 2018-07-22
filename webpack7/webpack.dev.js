/**
 * Created by zhaochuanchuan on 2018/7/22.
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  }
})