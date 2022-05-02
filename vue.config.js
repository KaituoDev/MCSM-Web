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
  productionSourceMap: false
};
