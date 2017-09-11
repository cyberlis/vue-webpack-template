const path    = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer')
const cssnano      = require('cssnano')

let isProd = (process.env.NODE_ENV === 'production')
let cssDev = (isProd ? '' : `?root=${__dirname}&sourceMap`)

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/', // for absolute path in css images for sourceMap
    filename: 'main.bundle.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', `css${cssDev}!postcss`)
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', `css${cssDev}!postcss!stylus`)
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|ico|woff|ttf|eot|wav|mp3)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer(),
      cssnano({
        discardComments: {
          removeAll: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist/'),
    new ExtractTextPlugin('styles.min.css', {
      disable: !isProd
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      },
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
