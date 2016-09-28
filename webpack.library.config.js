const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    library: './src/browser/src/library.js'
  },
  output: {
      path: './dist',
      filename: 'QRScanner.min.js',
      library: 'QRScanner',
      libraryTarget: 'umd',
      umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    })
  ]
}
