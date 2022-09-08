module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需加载 core-js 的 polyfill
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ]
}
