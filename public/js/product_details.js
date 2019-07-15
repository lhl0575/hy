
$(function(){

    var pid=location.search.split("=")[1];
     var count=1;
    $.ajax({
        url:"http://127.0.0.1:8080/product/getproduct",
        type:"get",
        data:{pid},
        dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
        success:function(result){
            var uid=result.uid;
            var product=result.data[0];
            // var user_id=req.session.uid;
            // console.log("user_id:"+user_id);
            var html=` <div class="bookImage" id="popbigpic">
            <a href="#" class="img">
              <img src="${product.pic}" alt="">
            </a>
          </div>
          <div class="bookInfo">
              <div class="bookDetail">
                <h3>${product.pname}</h3>
                <p class="recomand">${product.details}</p>
                <div class="author">
                  <span>作者:${product.author}</span>
                </div>
                <div class="publisher">
                  <span>出版社:${product.source_name}</span>
                </div>
                <div class="publishTime">
                  <span>出版时间:${product.time}</span>
                </div>
                <div class="otherinfo">
                  <span>本类榜单:${product.type}</span>
                </div>
                
              </div>
              <div class="priceWrap">
                <span class="sellPriceTit">售价:</span>
                <span class="sellPrice">￥${(product.price*0.78).toFixed(1)}</span>
                <span class="discount">(7.8折)</span>
                <span class="price">定价:</span>
                <del>￥${product.price}</del>
              </div>
              <div class="oparateButton">
                <a href="javascript:;" class="buyButton">加入购物车</a>
                <a href="javascript:;" class="collectBtn">收藏</a>
              </div>
          </div>`;
          //将填充好的HTML片段，放入页面中指定的父元素下
          document.getElementById("bookDetailWrap").innerHTML=html;
          $(".oparateButton .buyButton").click(function(){
             
            if(uid){             
               $.ajax({
                 url:"http://127.0.0.1:8080/product/getcartBypid",
                 type:"get",
                 data:{user_id:uid,product_id:pid},
                 dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
                 success:function(result){
                      if(result.length>0){
                        location.href="http://127.0.0.1:8080/cart.html?user_id="+uid;
                      }else{
                        $.ajax({
                          url:"http://127.0.0.1:8080/product/joincart",
                          type:"get",
                          data:{
                            user_id:uid,
                            product_id:product.pid,
                            count:1,
                            pic:product.pic,
                            pname:product.pname,
                            price:product.price,
                            is_checked:1
                          },
                          dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
                          success:function(result){
                               location.href="http://127.0.0.1:8080/cart.html?user_id="+uid;
                              
                          }
                        })
                      }
                    
                 }
             })

              
              
            }else{
               location.href="http://127.0.0.1:8080/login.html"
            }
            
        })

        }
    })

    
    $(".fiveStartCon ul li").hover(function(){
        var $this=$(this);
        $this.addClass("cur").siblings().removeClass("cur")
    })
    $(".userRec ul li").hover(function(){
        var $this=$(this);
        $this.addClass("cur").siblings().removeClass("cur")
    })
})

           
