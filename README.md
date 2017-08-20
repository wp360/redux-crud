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
[参考链接1](http://blog.csdn.net/eagyne/article/details/53780653)

[参考链接2](https://segmentfault.com/a/1190000006055973)

## 安装 redux
`npm install --save redux react-redux redux-thunk`
```javascript
1.create store
2.apply middlewares
3.provider
```
`npm install --save redux-devtools-extension`

`npm install --save react-router@4.0.0`
>`注：这里先安装的是4.0.0，不是最新4.1.2，最新版的话在用法上有不少问题（例如 Match），后期等研究后再更新。但是BrowserRouter无法使用。由于Link、BrowserRouter等都是在react-router-dom里的。但如果另外再安装react-router-dom，又会出现不少问题。最后折中一下，安装了一个4.0.0-alpha版就可以了。这块坑挺多，先完成项目后期再做版本更新的测试调整。`
## react-router最新版本更新
>`详见下方【react-router新版安装】会有详细说明`
##react-redux 之 connect 方法详解
[链接](https://yq.aliyun.com/articles/59428)
## 关于React 中函数式声明组件
>`在[面试中问什么React问题？](https://zhuanlan.zhihu.com/p/28176065)一文中，提到：什么时候应该选择用class实现一个组件，什么时候应该用一个函数实现一个组件？然后，在MovieList.js里是这样声明的：export default function MoviesList({movies}) =>{ ... }，一开始不太明白，后来看了一篇文章[React中函数式声明组件](https://segmentfault.com/a/1190000006180667)，于是就明白了。（注意：源码有误，运行会报错，改成：const MoviesList = ({movies}) => { ... } export default MoviesList;就好了。）`

![图片展示](https://sfault-image.b0.upaiyun.com/127/723/127723555-58e86f7592f36_articlex)

## React.PropTypes更新警告
`React.PropTypes is deprecated since React 15.5.0, use the npm module prop-types instead  react/no-deprecated`
>`关于这块更新 还要看英文文档：[链接](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)`
## 【服务篇】
>`新建文件夹backend，新建文件server.js;安装express、mongodb`

`npm install --save express mongodb`

`npm install --save-dev nodemon babel-cli babel-preset-es2015`
## Mongodb
`mongo`

>`Mongo运行错误：Failed to connect 127.0.0.1:27017,reason:errno:10061由于目标计算机积极拒绝，无法连接`
>`原因是mongodb的服务没有开启，开启服务后问题就能解决了，开启服务命令：mongod --dbpath "mongodb下data地址"。只要操作mongodb数据库，服务就要一直开着`

`mongod --dbpath "K://MongoDB//mongodb//data"`

```javascript
E:\node\React\redux-crud\backend>mongo
2017-08-12T22:28:56.749+0800 I CONTROL  [main] Hotfix KB2731284 or later update is not installed, will zero-out data files
MongoDB shell version: 3.2.0
connecting to: test
> use crudwithredux
switched to db crudwithredux
> db.movies.insert({title:'战狼'})
WriteResult({ "nInserted" : 1 })
> exit
bye
```
## Semantic UI
[链接](http://www.semantic-ui.cn/)

`npm install --save classnames@2.2.5`

`npm install --save body-parser@1.15.2`

## 编辑
>`1.Search Redux Store 2.Fetch Data form Server 3.No id?Create new one then.`
```javascript
首先，表单页面添加更新方法updateMovie;然后action.js里添加对应方法;接着是reducer;最后服务端server.js添加对应的数据更新方法。
代码如下：
    app.put('/api/movies/:_id',(req,res)=>{
        const{errors,isValid} = validate(req.body);
        if(isValid){
            const {title,cover} = req.body;
            db.collection('movies').findOneAndUpdate(
                {_id:new mongodb.ObjectID(req.params._id)},
                {$set:{title,cover}},
                (err,result)=>{
                    if(err){
                        res.status(500).json({
                            errors:{global:err}
                        });
                        return;
                    }
                    res.json({movie:result.value});
                }
            );
        }else{
            res.status(400).json({errors});
        }
    });
```
## 删除
```javascript
首先，页面里添加删除方法;然后action.js里添加对应方法;接着是reducer;最后服务端server.js添加对应的数据更新方法。
代码如下：
    app.get('/api/movies/:_id',(req,res)=>{
        db.collection('movies').findOne({_id:new mongodb.ObjectId(req.params._id)},(err,r)=>{
            if(err){
                res.status(500).json({
                    errors:{global:err}
                });
                return;
            }
            res.json({});
        });
    });
```

>`心得：有很多时候，很多问题，一时间你不明白，但当你看的多了。忽然有一天，你会发现：哦，原来是这样。此外，一本书，一个教程不可能包罗万象，只有当你有了一定的积累，才可能触类旁通。这对于初学者尤其如此。`

[参考Build a CRUD App Using React, Redux and FeathersJS](https://www.sitepoint.com/crud-app-react-redux-feathersjs/)

## 【项目原文】
[链接](https://remzolotykh.net/tag/crud-with-redux/)

## 【react-router新版安装】
```javascript
1.卸载"react-router": "^4.0.0-alpha.6"
（`npm uninstall --save react-router@4.0.0-alpha.6`）
2.`npm install --save react-router-dom`
3.修改 "react-router" 为 "react-router-dom","Match" 换成 "Route"
例如：
<Match exactly pattern="/movies" component={MoviesPage} />
<Match pattern="/movies/new" component={MoviesFormPage} />
<Match pattern="/movie/:_id" component={MoviesFormPage} />
替换为：
<Route exact path="/movies" component={MoviesPage} />
<Route path="/movies/new" component={MoviesFormPage} />
<Route path="/movie/:_id" component={MoviesFormPage} />
此外，match的使用
this.props.params 换成 const {match} = this.props;  match.params
还有去掉：activeClassName="active" activeOnlyWhenExact
修改为：
const ActiveLink = ({ label,to,activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
     <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);
<ActiveLink activeOnlyWhenExact to="/" label="首页" />
<ActiveLink activeOnlyWhenExact to="/movies" label="电影" />
<ActiveLink activeOnlyWhenExact to="/movies/new" label="新增" />
```
### 注：最新版只需安装react-router-dom.

## 如果安装react-router-dom v4中有问题，具体操作参考
[https://reacttraining.com/react-router](https://reacttraining.com/react-router)

[初探 React Router 4.0](http://blog.csdn.net/sinat_17775997/article/details/69218382)

[http://www.cnblogs.com/dudeyouth/p/6617059.html](http://www.cnblogs.com/dudeyouth/p/6617059.html)

## 拓展阅读
[链接](https://github.com/wxyyxc1992/Web-Development-And-Engineering-Practices#react)
## [MLab]
[云数据库](https://mlab.com)
```javascript
操作步骤：
第一步，注册登陆；
第二步，Create new；
第三步，选择亚马逊，sandBox，免费Free；
第四步，填写数据库名称；
第五步，确定完成；
第六步，点击用户 > Add database user > 会生成弹框 > 直接输入保存即可；
第七步，相关页面数据对接
const dbUrl = 'mongodb://localhost/crudwithredux';
改成：
const dbUrl = 'mongodb://admin:redux2017@ds145263.mlab.com:45263/redux-crud';
备注：界面好像有更新 不过操作依旧简便。
```
