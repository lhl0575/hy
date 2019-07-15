//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//创建路由

//1.用户注册
//1.1.注册验证用户名是否可用
 router.post("/reg",function(req,res){
   var obj=req.body;
  pool.query("insert into bw_user set ?",[obj],function(err,result){
	if(err) throw err;
	if(result.affectedRows>0){
		res.send("注册成功");
	}
  });
 });
 //1.2.查询用户名
  router.get("/query",function(req,res){
	  var uname=req.query.uname;
	  
	  if(!uname){
		res.send("uname为空");
		return;
	  }
	pool.query("select * from bw_user where uname=?",[uname],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
  });
  //1.3查询邮箱
 router.get("/queryemail",function(req,res){
	  var email=req.query.email;
	  
	  if(!email){
		res.send("email为空");
		return;
	  }
	pool.query("select * from bw_user where email=?",[email],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}
	});
  });

//2.用户登录
router.post('/login',function(req,res){
  if(!req.body.uname){
   res.send({code:401,msg:'uname required'});
   return;
  }
  if(!req.body.upwd){
   res.send({code:402,msg:'upwd required'});
   return;
  }
  pool.query('select * from bw_user where uname=? and upwd=?',[req.body.uname,req.body.upwd],function(err,result){
    if(err) throw err;
	if(result.length>0){
		req.session.uid=result[0].uid;
		res.send({code:200,msg:'登陆成功',data:result});
		
	}else{
	  res.send({code:301,msg:'登录失败'});
	}
  });
	  
});

 //3.删除用户
 router.get("/deleteuser",function(req,res){
	var obj=req.query;
	if(!obj.uid){
		res.send("uid不存在");
		return;
	}
	pool.query("delete from bw_user where uid=?",[obj.uid],function(err,result){
		if(err) throw err;
			res.send("1");
		
	});
});
 //4.检索用户
 router.get("/getuser",function(req,res){
	var uid=req.query.uid;
	if(!uid){
		res.send("uid为空");
		return;
	}
	
	pool.query("select * from bw_user where uid=?",[uid],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});
//5.用户修改
 router.post("/updateuser",function(req,res){
	 var obj=req.body;
  var num=400;
  for(var key in obj){
	  num++;
    if(!obj[key]){	
	 res.send({code:num,msg:key+'required'});
	 return;
	}
  
  }
  pool.query('update bw_user set uname=?,upwd=?,email=?,phone=?,user_name=?,sex=? where uid=?',[obj.uname,obj.upwd,obj.email,obj.phone,obj.user_name,obj.sex,obj.uid],function(err,result){
    if(err) throw err;
	res.send("1");
		
  });
 
 });
//6.用户列表
router.get("/list",function(req,res){
	pool.query("select * from bw_user",function(err,result){
		if(err) throw err;
		res.send(result);
	});
});

//导出路由器
module.exports=router;









