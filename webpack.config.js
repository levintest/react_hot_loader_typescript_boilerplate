const webpack = require('webpack');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8100',
    __dirname + '/src/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
    publicPath: '/dist/'
  },
  // devtool: 'source-map',
  devtool: 'eval',
  resolve: {
    extensions: ['.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: ['source-map-loader']
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    port: 8100,
    hot: true,
    inline: true
  }
};