module.exports = {
  presets: [
    [
      "@vue/app",
      // 使用这个不打包core-js
      {
        useBuiltIns: false
      }
    ]
  ]
};
