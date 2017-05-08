var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var ENTRY_PATH = path.resolve(ROOT_PATH, 'src');
var PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');

module.exports = {
  // /src 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: ENTRY_PATH,
  // /public 输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: PUBLIC_PATH,
    filename: 'bundle.js'
  },
  // 添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'webpack'
    })
  ]
};
