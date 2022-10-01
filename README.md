# tea-store
这是一个vue2+node.js仿移动端的电商项目

前端使用vue2 + vuex + axios + vant + better-scroll + scss + flexible.js淘宝无限适配

后端通过使用express-generator插件搭建node.js服务器，与MySQL数据库连接

后端文件夹是server，运行整个项目前要先在本地终端启动sever

# 功能点
1、短信验证码或密码登录、注册

2、对购物车的商品进行数量增加、删除、结算等操作

3、提交订单中可选择收货地址

4、查看所有订单

5、对收货地址进行添加、编辑、删除操作

6、输入关键字 或 点击历史记录 进行商品搜索

7、清空搜索记录

8、对搜索出来的商品进行综合、价格、销量进行排序（升降序）

9、分类页左右联动滑动，点击不同的类目自动滑动到对应分类

10、点击不同首页的分类滑动栏，显示不同的数据

# 功能模块

## Login登录注册、
## Home首页、
## Search搜索、
## Category分类、
## Detail详情、
## Cart购物车、
## Order订单、
## Address地址

## 项目启动

```
// 在 TEA-STORE 和 sever 的文件夹目录下分别打开终端，分别下载依赖
npm install
```

### 编译
前后端执行的命令不同，具体可以去各自的package.json文件查看script脚本
```
// TEA-STORE的终端运行
npm run serve

// sever的终端运行
npm run start
```

### 打包项目
```
// TEA-STORE的终端运行
npm run build
```

