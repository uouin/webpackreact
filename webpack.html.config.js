// 首先这也是一个模块输出
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: "./app/index.js",
    entry: {
        build:"./app/index.js",
        homePage:"./app/abc.js" // 打包两个js
    },
    output: {
        path: path.join(__dirname, 'build'),
        // publicPath:'/build/',
        filename: "[name].js"   //与entry的key值对应
    },
    module: {
        loaders: [{
            test: /.css$/,
            loaders: ["style-loader", "css-loader"],
            exclude: "/node_modules/"
        }]
    },
    devServer:{
        hot:true,
        inline:true
    },
    resolve:{
        extensions:['.js','.css','.jsx']     // 自动补全识别后缀
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎",
            chunks:['build']
        }),
        new htmlWebpackPlugin({
            title:"欢迎",
            filename:"homePage.html", // 无则默认index.html
            chunks:['homePage'] // 需要引用的js
        })
    ]
    
}