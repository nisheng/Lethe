const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
// console.log(path.resolve(__dirname,'../dist'));

// module.exports = merge(common, {
//     mode: 'production',
// });
module.exports = {
    mode : "development",
    devtool: 'inline-source-map',
    entry : {
        main: './src/index.js'
    },
    output : {
        path: path.resolve(__dirname,'../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
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
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
            //     ],
            // },
            {// antd样式处理
                test: /\.css$/,
                exclude: /src/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },


            // {
            //     loader:'url-loader',
            //     options:{
            //         limit:500
            //     }
            // }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),//js压缩
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash: false,
            template: './src/app.html'
        })
    ],
    // devServer: {
    //     contentBase: path.resolve(__dirname,'../dist'),
    //     host: 'localhost',
    //     compress: true,
    //     port : 8886
    // }
}
