const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
            {
                loader: 'vue-tslint-loader',
                options: {
                  emitErrors: true
                }
            }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
          hotReload: true
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.styl(us)?$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './dist',
    hot: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin,
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.mode = 'production';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}