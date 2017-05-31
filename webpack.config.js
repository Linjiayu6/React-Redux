const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
const ROOT_PATH = path.resolve(__dirname);
const ENTRY_PATH = path.resolve(ROOT_PATH, 'src');
const PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');

module.exports = {
  // /src 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: ENTRY_PATH,
  // /public 输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: PUBLIC_PATH,
    filename: '[name].[hash].bundle.js',
    // 这里没有加入publicPath, 指定文件引用的目录
    // 如果咩有publicPath, react-router就会去找biztone/bundle.js 所以一直找不到
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?sourceMap'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: ENTRY_PATH,
        query: {
          // 添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: `${__dirname}/template.html`,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    contentBase: './src', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true, // 自动刷新实时预览修改后的效果
  },
};
