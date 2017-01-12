// module.exports = {
//   entry: './src/index.js',
//   output: { path: __dirname + '/build', filename: 'app.js' },
//   module: {
//     loaders: [
    //   {
    //     test: /.js?$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     query: {
    //       presets: ['es2015', 'react']
    //     }
    //   }
//     ]
//   },
// };

var webpack = require('webpack');
// var cssnext = require('postcss-cssnext');
// var postcssFocus = require('postcss-focus');
// var postcssReporter = require('postcss-reporter');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: __dirname + '/build',
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:4000/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
    //   {
    //     test: /\.css$/,
    //     exclude: /node_modules/,
    //     loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
    //   },
    //   {
    //     test: /\.css$/,
    //     include: /node_modules/,
    //     loaders: ['style-loader', 'css-loader'],
    //   },
    {
        test: /.js?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
    },
    //   {
    //     test: /\.(jpe?g|gif|png|svg)$/i,
    //     loader: 'url-loader?limit=10000',
    //   },
    //   {
    //     test: /\.json$/,
    //     loader: 'json-loader',
    //   },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: 'vendor.js',
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],

  // postcss: () => [
  //   postcssFocus(),
  //   cssnext({
  //     browsers: ['last 2 versions', 'IE > 10'],
  //   }),
  //   postcssReporter({
  //     clearMessages: true,
  //   }),
  // ],
};
