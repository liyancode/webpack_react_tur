/*-- webpack.config.prod.js --*/
/*-- webpack.config.prod.js --*/
var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path=require("path");
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports={
    devtool:'source-map',

    entry:SRC_DIR+"/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"bundle[hash].js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader' },
            { test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader:'css-loader',
                        options: {
                            minimize: true,
                            modules: false,
                            importLoaders: true,
                            localIdentName: '[hash:16]'
                        }
                    }
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            compressor: {
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new ExtractTextPlugin("[hash].css")
    ]

}
