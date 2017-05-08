# React_Redux_Webpack
keywords: react, redux, webpack

### 1. Init

#### 1.1 create repository

`$ npm init`

#### 1.2 install modules

安装地址参考:
http://zhaoda.net/webpack-handbook/install.html
https://fakefish.github.io/react-webpack-cookbook/
https://vikingmute.gitbooks.io/webpack-for-fools/content/entries/chapter-1.html

### 2. Webpack
- https://webpack.js.org/guides/

配置文件主要分为三个部分
- entry: /src/ 入口文件
- output: /public/ 出口
- module: 模块 要用什么不同的模块来处理各种类型的文件

#### 2.1 配置webpack
- `$ npm install webpack -g`
- `$ npm install html-webpack-plugin --save-dev` 快速生成html
- 配置webpack.config.js, 定义好打包入口文件src, 出口文件public, plugins: HtmlwebpackPlugin可以快速生成html,
并将打包的内容自动引入
- 用`$ webpack` 运行一下

#### 2.2 webpack-dev-server
- `$ npm install webpack-dev-server --save -dev`
- 在webpack.config.js里面配置devServer
- package.json里面配置运行的命令 "start": "webpack-dev-server --progress --hot --inline --content-base"
- 运行`$ npm start`

#### 2.3 css-loader style-loader
- `$ npm install css-loader style-loader --save-dev`
- webpack.config.js module配置loaders

#### 2.4 支持第三方库
- `$ npm install moment --save-dev`

#### 2.5 es6
- `$ npm install babel-loader babel-preset-es2015 --save-dev`
- 配置webpack.config.js loaders

#### 2.6 启用source-map, 构建, output bundle.js
- 加入devtool: 'eval-source-map' 现在的代码是合并以后的代码，不利于排错和定位，只需要在config中添加
这样出错以后就会采用source-map的形式直接显示你出错代码的位置
- package.json: "build": "webpack --progress --profile --colors --config webpack.config.js"
- `$ npm run build`
- 生成Hash名称的script来防止缓存 filename: '[name].[hash].bundle.js'
