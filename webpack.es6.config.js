// 首先这也是一个模块输出
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: "./app/index.js",
    entry: {
        es6: __dirname + "/es6/index.js",
    },
    output: {
        path: path.join(__dirname, 'build'),
        // publicPath:'/build/',
        filename: "[name].js" //与entry的key值对应
    },
    module: {
        loaders: [{
                test: /.css$/,
                loaders: ["style-loader", "css-loader"],
                exclude: "/node_modules/"
            },
            {
                test: /.js$/,
                loaders: ["babel-loader"],
                exclude: "/node_modules/",
                include: path.resolve(__dirname, "/es6/")
            }
        ]
    },
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['.js', '.css', '.jsx'] // 自动补全识别后缀
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "欢迎来到__es6",
            filename: "es6.html", // 无则默认index.html
            chunks: ['es6'] // 需要引用的js
        })
    ]

}