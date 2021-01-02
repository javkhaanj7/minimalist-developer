const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

let plugins = [];
let optimization = {};

// plugins.push(new BundleAnalyzerPlugin());
plugins.push(new MomentLocalesPlugin({
  localesToKeep: ['mn'],
}));

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    plugins,
    optimization,
  },
};
