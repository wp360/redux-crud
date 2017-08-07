## 使用Facebook的create-react-app快速构建React开发环境
```javascript
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```
## create-react-app慢的解决方法
```
npm config set registry https://registry.npm.taobao.org
-- 配置后可通过下面方式来验证是否成功
npm config get registry
-- 或npm info express
```
[链接](http://blog.csdn.net/eagyne/article/details/53780653)

[参考](https://segmentfault.com/a/1190000006055973)
`npm install --save redux react-redux redux-thunk`
1.create store
2.apply middlewares
3.provider
