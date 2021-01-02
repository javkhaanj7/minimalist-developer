const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// plugins.push(new BundleAnalyzerPlugin());

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    plugins,
    optimization,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/minimalist-developer/b/vue-app/'
    : '/'
};
