const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')
const app = express()

// 处理一下跨源
app.use(cors())

// 目标地址 C 是: https://api.asilu.com/today/
// 这是我们可以访问 B 是：http://localhost:9090/today/

// A 发起请求 http://localhost:9090/migu/today/

// 提供代理，处理跨源的数据
app.use('/migu', createProxyMiddleware({
  // 目标地址，只写主机
  target: 'https://api.asilu.com',
  changeOrigin: true,
  pathRewrite: {
    '^/migu': ''
  }
}))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(9090, () => {
  console.log('服务器启动成功')
})

// 运行这个程序 npm run start  或者 npm start
// supervisor server.js
