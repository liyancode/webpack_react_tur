/*-- webpack.config.dev.js --*/
var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");

var path=require("path");
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports={
  devtool:'cheap-eval-source-map',

  entry:SRC_DIR+"/main.js",
  output:{
    path:__dirname+"/dist",
    filename:"bundle.js"
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:SRC_DIR+"/index.html"
    }),
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],

  module: {
    loaders: [
    {
      test: /\.css$/,
      //loader: 'style-loader!css-loader?modules'
      loader: 'style-loader!css-loader'
    }, 
    { test: /\.(js|jsx)$/, loader: 'babel-loader' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  },

  devServer:{
    port: 8889,
    contentBase:'./dist',
    hot:true,
    proxy: {
      "/rest/**": "http://10.236.91.218:4567"
    }
  }
}
