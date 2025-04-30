// postcss.config.js
module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      propList: ['*'],     // 转换所有 CSS 属性
      mediaQuery: true,    // 允许媒体查询中的 px 转换
      minPixelValue: 2     // 最小转换像素值（默认值2）
    }),
  ]
};
