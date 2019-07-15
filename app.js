const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const userRouter=require('./routers/user.js');
const productRouter=require('./routers/product.js');

//创建web服务器
var server=express();
server.listen(8080);

server.use(cors({
  origin:"http://127.0.0.1:5500"
}))

//6添加session功能
const session=require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}))

//托管静态资源到public
server.use(express.static('public'));

//使用body-parser中间件
server.use(bodyParser.urlencoded({
  extended:false
}));

//挂载路由器 挂载到/user 路由访问/user/reg
server.use('/user',userRouter);
server.use('/product',productRouter);



























