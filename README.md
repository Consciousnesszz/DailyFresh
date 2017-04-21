# DailyFresh
## 项目介绍
  该项目使用 AngularJS + ionic 框架，实现了首页货物展示，购物车货物添加删除，登录注册
## 总结
  1. AngularJS 兼容到 IE10
  2. 双向数据绑定
  3. route 实现路由控制（route 控制器中的代码  每次路由改变都会执行  要保证精简）
  4. ionic 文档不清楚的地方在源码查找
  5. 自动登录：localStorage 保存 access_token
  6. 抓取验证码发送的加密算法 --> 前端安全
## 不足
  1. 货物请求需要的参数不足，只有部分商品信息
  2. 引入js文件太多
