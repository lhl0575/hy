const express=require('express');
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//1.添加商品
 router.get('/add',function(req,res){
	 var obj=req.query;
	 var num=400;
	 for(var key in obj){
		 num++;
      if(!obj[key]){
	   res.send({code:num,msg:key+'required'});
	   return;
	  }
	 
	 }
     pool.query('insert into bw_product set ?',[obj],function(err,result){
	  if(err) throw err;
	  if(result.affectedRows>0){
	   res.send({code:200,msg:'add suc'});
	  }
	 });
 })
//2.删除商品
 router.get('/delete',function(req,res){
  if(!req.query.pid){
    res.send({code:401,msg:'pid required'});
	return;
  }
  pool.query('delete from bw_product where pid=?',[req.query.pid],function(err,result){
   if(err) throw err;
   res.send("1");
  });
 });

//3.商品详情
 router.get('/getproduct',function(req,res){
   var uid=req.session.uid;
  if(!req.query.pid){
   res.send({code:401,msg:'pid required'});
   return;
  }
  pool.query('select * from bw_product where pid=?',[req.query.pid],function(err,result){
   if(err) throw err;
    res.send({uid:uid,data:result})
  });
 });

//4.修改商品
 router.get('/update',function(req,res){
  var obj=req.query;
  var num=400;
  for(var key in obj){
   num++;
   if(!obj[key]){
    res.send({code:num,msg:key+'required'});
	return;
   }
  }
   pool.query('update bw_product set pname=?,details=?,author=?,source_name=?,time=?,appraise=?,appraise_count=?,type=?,price=? where pid=?',[obj.pname,obj.details,obj.author,obj.source_name,obj.time,obj.appraise,obj.appraise_count,obj.type,obj.price,obj.pid],function(err,result){
    if(err) throw err;
	res.send("1");
   });
  
 });
 //6.商品列表
	router.get("/list",function(req,res){
	pool.query("select * from bw_product",function(err,result){
		if(err) throw err;
		res.send(result);
	});
});
//7.加入购物车
router.get('/joincart',function(req,res){
  var obj=req.query;
  
    pool.query('insert into bw_shoppingcart_item set ?',[obj],function(err,result){
   if(err) throw err;
   if(result.affectedRows>0){
    res.send({code:200,msg:'加入购物车成功'});
   }
  });
})
//8.根据用户id查询购物车
router.get('/getcart',function(req,res){
  var user_id=req.query.user_id;
  
  pool.query('select * from bw_shoppingcart_item where user_id=?',[user_id],function(err,result){
   if(err) throw err;
    res.send(result);
  });
 });
 //8.根据商品id查询购物车
router.get('/getcartBypid',function(req,res){
  var product_id=req.query.product_id;
  var user_id=req.query.user_id;
  
  pool.query('select * from bw_shoppingcart_item where user_id=? and product_id=?',[user_id,product_id],function(err,result){
   if(err) throw err;
    res.send(result);
  });
 });

 //9.修改购物车中产品的数量
router.get('/updatecart',function(req,res){
  

   pool.query('update bw_shoppingcart_item set count=? where product_id=?',[req.query.count,req.query.product_id],function(err,result){
    if(err) throw err;
	res.send("1");
   });
  
 });


 //9.根据购物车iid删除购物车中的商品
 router.get('/deletecart',function(req,res){
  if(!req.query.iid){
    res.send({code:401,msg:'iid required'});
	return;
  }
  pool.query('delete from bw_shoppingcart_item where iid=?',[req.query.iid],function(err,result){
   if(err) throw err;
   res.send("1");
  });
 });

//搜索模糊查询
router.get('/search',function(req,res){
  var product_name="%"+req.query.pname+"%";
  console.log("1:"+product_name)
  pool.query("select * from bw_product where pname like ?",[product_name],function(err,result){
   if(err) throw err;
    res.send(result);
  });
 });


//导出路由器
module.exports=router;






