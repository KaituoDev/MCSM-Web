/*
 * @Author: Copyright(c) 2020 Suwings
 * @Date: 2021-05-08 21:46:34
 * @LastEditTime: 2021-08-30 10:43:11
 * @Description:
 */
// vue.config.js

/**
 * @type {import("@vue/cli-service").ProjectOptions}
 */

const CompressionPlugin = require('compression-webpack-plugin');
const gzipExtensions = ['js', 'css', 'html'];

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:23333/"
      }
    }
  },
  filenameHashing: false,
  pages: {
    index: {
      entry: "src/app/index.js",
      filename: "index.html",
      template: "public/index.html",
      title: "MCSManager"
    }
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip', // 使用 gzip 压缩
        test: new RegExp('\\.(' + gzipExtensions.join('|') + ')$'), // 匹配文件名
        filename: '[path][base].gz', // 压缩后的文件名(保持原文件名，后缀加 .gz)
        minRatio: 0.8, // 压缩率小于 0.8 才会压缩
        threshold: 10240, // 对超过 10k 的数据压缩
        deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非 gzip 的资源，可不设置或者设置为 false（比如删除打包后的 gz 后还可以加载到原始资源文件）
      })
    ]
  },
  productionSourceMap: false
};
