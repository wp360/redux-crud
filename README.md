## 使用Facebook的create-react-app快速构建React开发环境
```javascript
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```
## create-react-app慢的解决方法
```javascript
npm config set registry https://registry.npm.taobao.org
-- 配置后可通过下面方式来验证是否成功
npm config get registry
-- 或npm info express
```
[链接](http://blog.csdn.net/eagyne/article/details/53780653)

[https://segmentfault.com/a/1190000006055973](https://segmentfault.com/a/1190000006055973)

## 安装 redux
`npm install --save redux react-redux redux-thunk`
```javascript
1.create store
2.apply middlewares
3.provider
```
`npm install --save redux-devtools-extension`

`npm install --save react-router@4.0.0`
>`注：这里先安装的是4.0.0，不是最新4.1.2，最新版的话在用法上有不少问题（例如 Match），后期等研究后再更新。但是BrowserRouter无法使用。由于Link、BrowserRouter等都是在react-router-dom里的。但如果另外安装react-router-dom，又会出现不少问题。最后折中一下，安装了一个4.0.0-alpha版就可以了。这块坑挺多，先完成项目后期再做版本更新的测试调整。`

## 新版安装
`npm install --save react-router react-router-dom`
### 注：最新版react-router、react-router-dom都需安装，否则：'react-router' does not contain an export named 'Link'.
## 如果安装react-router-dom v4会有不少问题，具体操作参考
[https://reacttraining.com/react-router](https://reacttraining.com/react-router)

[初探 React Router 4.0](http://blog.csdn.net/sinat_17775997/article/details/69218382)

[http://www.cnblogs.com/dudeyouth/p/6617059.html](http://www.cnblogs.com/dudeyouth/p/6617059.html)