const path = require('path');
const {CleanWebpack, CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpack = require('html-webpack-plugin')
module.exports = {
    mode : "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[fullhash].js",
    },
    devServer: {
        port:8080,

    },
    plugins: [
        new HTMLWebpack({template:"./src/index.html"}),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules:[{
            test: /\.(css|less)$/ ,
            use:["style-loader","css-loader","less-loader"]
        },
        {
            test: /\.(jpg|png|jpeg)$/,
            use: ["file-loader"]
        }
    ]
    }
}