module.exports = {
  plugins: {
    autoprefixer: {
      // 不需要设置 browsers 属性了，它会自动去读取 .browserslistrc 配置文件

      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    },

    'postcss-pxtorem': {
      // 转换的基准值 1rem = 37.5px
      // xrem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
