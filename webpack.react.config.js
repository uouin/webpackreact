// 首先这也是一个模块输出
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: "./app/index.js",
    entry: {
        react: __dirname + "/react/index.jsx",
    },
    output: {
        path: path.join(__dirname, 'build'),
        // publicPath:'/build/',
        filename: "[name].jsx" //与entry的key值对应
    },
    module: {
        loaders: [{
                test: /.css$/,
                // loaders: ["style-loader", "css-loader"],
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: "/node_modules/"
            },
            {
                test: /.jsx$/,
                loaders: ["babel-loader"],
                // query:["es2015","react"],
                // loaders: ["react-hot-loader","babel-loader?presets[]=es2015&presets[]=react"],
                exclude: "/node_modules/",
                include: path.resolve(__dirname, "react")
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //       limit: 8192
                    //     //   mimetype: 'image/png'
                    //     }
                    //   }
                ],
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
                use: [
                    'file-loader'
                ]
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
            title: "欢迎react__react_react",
            filename: "react.html", // 无则默认index.html
            chunks: ['react'] // 需要引用的js
        })
    ]

}