/**
 * Created by zhaochuanchuan on 2018/7/5.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 插件，构建时会生成新的index.html文件,所有的 bundle 会自动添加到 html 中，
// 并替换原来的dist中旧的index.html文件

const CleanWebpackPlugin = require('clean-webpack-plugin') // 插件，由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。
// webpack会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。通常，在每次构建前清理 /dist 文件夹，
// 是比较推荐的做法，因此只会生成用到的文件。

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
