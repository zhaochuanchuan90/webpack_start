/**
 * Created by zhaochuanchuan on 2018/7/5.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 插件，构建时会生成新的index.html文件,所有的 bundle 会自动添加到 html 中，
// 并替换原来的dist中旧的index.html文件

const CleanWebpackPlugin = require('clean-webpack-plugin') // 插件，由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。
// webpack会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。通常，在每次构建前清理 /dist 文件夹，
// 是比较推荐的做法，因此只会生成用到的文件。

const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map', // 1.为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码
  // 2.提供了一个简单的 web 服务器，并且能够实时重新加载。该配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，
  // 作为可访问文件。查看hosts文件localhost是否是127.0.0.1,如果不是的话会报错Error: getaddrinfo ENOTFOUND localhost
  devServer: {
    contentBase: './dist',
    hot: true, // 模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
     ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 3.webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server在内部使用了它，
    // 同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求
    // publicPath: '/',
  },
};
