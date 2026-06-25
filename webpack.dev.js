const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 8080,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      },
      logging: 'info'
    }
  },
  plugins: [
    new (require('webpack')).DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})