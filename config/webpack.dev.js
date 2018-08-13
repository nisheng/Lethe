const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
console.log('wtfwtfwtf');
console.log(path.resolve(__dirname,'../dist'));
module.exports = {
    mode : "development",
    entry : {
        main: './src/index.js'
    },
    output : {
        path: path.resolve(__dirname,'../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015', 'react'],
            //         plugins: [                                             //
            //             ["import", {libraryName: "antd", style: "css"}]   //需要配置的地方
            //         ]                                                    //
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {test: /\.less$/, loader: 'style-loader!css-loader?modules!less-loader'},
            {
                loader:'url-loader',
                options:{
                    limit:500
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),//js压缩
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash: true,
            template: './src/app.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname,'../dist'),
        host: 'localhost',
        compress: true,
        port : 8886
    }
}
