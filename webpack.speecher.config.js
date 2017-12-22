// 首先这也是一个模块输出
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');// new webpack.NamedModulesPlugin() new webpack.HotModuleReplacementPlugin()
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//删除未引用的代码
module.exports = {
  // entry: "./app/index.js",
  entry: {
    // react: __dirname + "/react/index.jsx"
    speecher: __dirname + "/speecher/index.jsx"
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    // publicPath:'/build/',
    filename: "[name].jsx" //与entry的key值对应
  },
  module: {
    loaders: [
      {
        test: /.css$/,
        // loaders: ["style-loader", "css-loader"],
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules/"
      },
      {
        test: /.jsx$/,
        loaders: ["babel-loader"],
        // query:["es2015","react"],
        // loaders: ["react-hot-loader","babel-loader?presets[]=es2015&presets[]=react"],
        exclude: "/node_modules/",
        include: path.resolve(__dirname, "speecher")
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
              // // the webp option will enable WEBP
              // webp: {
              //     quality: 75
              // }
            }
          }
          // {
          //     loader: 'url-loader',
          //     options: {
          //       limit: 8192
          //     //   mimetype: 'image/png'
          //     }
          //   }
        ]
      },
      // {
      //     test: /\.(html)$/,
      //     use: {
      //       loader: 'html-loader',
      //       options: {
      //         minimize: true
      //     }
      //     }
      //   },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./build",
    // historyApiFallback: true,
    hot: true,
    inline: true
  },
  resolve: {
    extensions: [".js", ".css", ".jsx"] // 自动补全识别后缀
  },
  devtool: "inline-source-map", // 显示错误出现在的文件
  plugins: [
    new CleanWebpackPlugin(["build"]), //每次编译前清除build下的文件
    new htmlWebpackPlugin({
      title: "speecher后台",
      // filename: "speecher.html", // 无则默认index.html
      chunks: ["speecher"] // 需要引用的js  
    }),
    // new webpack.NamedModulesPlugin(), //以便更容易查看要修补(patch)的依赖 
    new webpack.HotModuleReplacementPlugin(),//模块热替换(Hot Module Replacement)
    // new UglifyJSPlugin()
  ]
};
