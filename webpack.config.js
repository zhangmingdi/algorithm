const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Happypack = require('happypack');

module.exports = {
  // 记住在生产环境下 import 会自动tree-shaking 会自动去掉没用的代码，但是require不能，
  //这是import的好处
  mode: 'development',
  devtool: "source-map", // 2. 这个配置必须
  devServer: {
    // 启用热更新
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    //自动打开浏览器
    open: true,
    // compress: true,
    port: 2020,
  },
  module: {
    //不去解析jquery的依赖关系，可以省打包时间
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        // 不用处理的js
        exclude: /node_modules/,
        // 只需处理的js
        include: path.resolve('src'),
        //使用id为js的happypack插件
        // use: 'Happypack/loader?id=js'
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "corejs": "3",
                  "useBuiltIns": "usage"
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        // use: 'Happypack/loader?id=css'
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  entry: {
    index: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // 启用多线程去打包代码，加快打包速度,记住只适合大项目，小项目分配多线程更花时间
    // new Happypack({
    //     id: 'js',
    //     use: [
    //         {
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: [
    //                     "@babel/preset-env",
    //                     "@babel/preset-react"
    //                 ]
    //             }
    //         }
    //     ]
    // }),
    // new Happypack({
    //     id: 'css',
    //     use: [
    //         "style-loader",
    //         "css-loader"
    //     ]
    // }),
    // 在引入某个库的时候需要去读取哪些任务清单，查看是否已经有该打包好的包
    // new webpack.DllReferencePlugin({
    //     manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // }),


    // 自动把js插入到指定到html
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // 引入第三方包中指定一些没必要的引入 moment包不允许引入locale
    new webpack.IgnorePlugin({ resourceRegExp: /\.\/locale/, contextRegExp: /moment/ }),
    // new webpack.NamedModulesPlugin(),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin()

  ],
  optimization: {
    // 分割代码块 多入口应用的时候才需要抽离公共import的部分
    splitChunks: {
      cacheGroups: {
        // 要抽离的公共模块
        common: {
          chunks: 'initial',
          //大小超过一个字节
          minSize: 0,
          //import过2次的
          minChunks: 2
        },
        // 要抽离的第三方模块
        vendor: {
          //权重，优先抽离第三方模块，如果不加权重就会以上面的顺序抽离
          //上面会把第三方模块当成公共模块抽离出去，导致第三方模块和公共模块放在同一个文件
          priority: 1,
          // 把你抽离出来
          test: /node_modules/,
          chunks: 'initial',
          //大小超过一个字节
          minSize: 0,
          //import过2次的
          minChunks: 2
        }
      }
    }
  }
}