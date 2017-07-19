/**
 * 开发模式下的webpack配置
 * 在整个项目开发过程中，几乎99%的时间都是在这个模式下进行的
 * 注意。两种模式的配置有较大差异！！
 */

const path = require('path');
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

import precss from 'precss'
import autoprefixer from 'autoprefixer'
import rucksackCss from 'rucksack-css'
import px2rem from 'postcss-pxtorem';
const px2remOpts = {
  rootValue: 100,
  replace: false,
  propWhiteList: []
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    './src/webpack-public-path',  // 服务器静态资源路径配置，保证首先载入
    'react-hot-loader/patch', // 激活HMR
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/js/index.js')
  ],
  target: 'web', // 编译到目标使用环境
  output: {
    path: `${__dirname}/src`,
    publicPath: '/', // 服务器静态资源路径配置
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({ // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
      'process.env.NODE_ENV': JSON.stringify('development'), // 告诉在构建或开发模式中做出反应. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NoErrorsPlugin(), // 不现实错误 webpack2 已抛弃
    new HtmlWebpackPlugin({ // 创建HTML文件，其中包括对捆绑CSS和js的引用。
      template: 'src/index.html',
      title: '开发模式',
      favicon:'./src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash:true,
      // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
      // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
      inject: 'body'
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.js', '.json'],

    // 路径别名, 懒癌福音
    alias:{
			app:path.resolve(__dirname,'src/js'),
			// 以前你可能这样引用 import { Nav } from '../../components'
			// 现在你可以这样引用 import { Nav } from 'app/components'

			style:path.resolve(__dirname,'src/styles')
			// 以前你可能这样引用 import "../../../styles/mixins.scss"
			// 现在你可以这样引用 import "style/mixins.scss"

			// 注意：别名只能在.js文件中使用。
    }
  },
  module: { // loaders
    loaders: [ // webpack1 为'loaders'，webpack2 改为'rules'
      {
        test: /\.js$/,
        loaders: ['babel'], // webpack1 为'loaders'，webpack2 改为'use'
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/js'),
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]', // class添加唯一编码
          'postcss-loader?parser=postcss-scss'
        ] // webpack2 所有插件必须加上-loader，不再允许缩写
      },
      // 组件样式，需要私有化，单独配置
      
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css!postcss?parser=postcss-scss'
      },
      // 公有样式，不需要私有化，单独配置

      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        loader: 'style!css!postcss'
      },
      
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  postcss: ()=> [precss,autoprefixer,rucksackCss,px2rem(px2remOpts)]
};
