//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
//引入session模块
const session=require("express-session")

/*引入路由模块*/
const index=require("./routes/index.js")
const details=require("./routes/details.js")
const products=require("./routes/products.js")
const users=require("./routes/users.js")
const cart=require("./routes/cart.js")

var app = express();
app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//配置session中间件
app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
}))
//托管静态资源到public目录下
app.use(express.static('public'));

/*使用路由器来管理路由*/
app.use("/index",index) //主页
app.use("/details",details) //商品详情
app.use("/products",products) //商品
app.use("/users",users) //用户
app.use("/cart",cart) //购物车
