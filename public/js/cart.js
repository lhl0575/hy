
  

var user_id=location.search.split("=")[1];

function getCartList(){
    $.ajax({
        url:"http://127.0.0.1:8080/product/getcart",
        type:"get",
        data:{user_id},
        dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
        success:function(result){
            //   console.log(result)
            
            
            var html="";
            for(var i=0;i<result.length;i++){
                var  p=result[i];
                 html +=`
                <div class="shoppingList select">
                    <div class="cartCheckbox">
                        <span class="J_check ">选中</span>
                    </div>
                    <div class="goodImg">
                        <a href="#">
                            <img src="${p.pic}" alt="">
                        </a>
                    </div>
                    <div class="goodName">
                        <a href="#">${p.pname}</a>
                    </div>
                    <div class="goodPrice">
                        <strong>￥${p.price}</strong>
                    </div>
                    <div class="goodQuantity">
                        <div class="quantityForm">
                            <button class="decrement" data-pid="${p.product_id}">-</button>
                            <input class="num J_input" type="text" value="${p.count}">
                            <button class="increment" data-pid="${p.product_id}">+</button>
                        </div>
                    </div>
                    <div class="goodSum">
                        <strong class="subtotal">￥${(p.price*p.count).toFixed(1)}</strong>
                    </div>
                    <div class="goodOperation">
                        <button data-id="${p.iid}">删除</button>
                    </div>
                </div>`;
            }    
            var shoppingItem=document.getElementById("shoppingItem");
            shoppingItem.innerHTML=html;

             
            
            //点击删除
            var btns=document.querySelectorAll(".goodOperation button");
            for(var btn of btns){
                btn.onclick=function(e){
                    var iid=e.target.dataset.id;
                    var del=confirm("您确定要删除该商品吗?");
                    if(del==true){
                        $.ajax({
                            url:"http://127.0.0.1:8080/product/deletecart",
                            type:"get",
                            data:{iid},
                            dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
                            success:function(result){
                                // console.log(result);
                                getCartList();
                            }
                        })
                    }
                   
                }
            }
            //点击+ -
            var btns=$(".quantityForm button");
            
            $(".quantityForm button").click(function(e){
                 var $this=$(this);
                 var pid=e.target.dataset.pid; 
                 var $input=$this.parent().children()[1];
                
                var count=$input.value;
                if($this.html()=="+"){
                    count++;
                    $input.value=count;
                }else if($this.html()=="-" && count>1){
                    count--;
                    $input.value=count;
                }
                $.ajax({
                    url:"http://127.0.0.1:8080/product/updatecart",
                    type:"get",
                    data:{product_id:pid,count:count},
                    dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
                    success:function(result){
                        // console.log(result);
                        getCartList();
                    }
                })
                
            })

            var $spSelected=$(".cartCheckbox span");
            
            $(".f1 span").click(function(){
                var $this=$(this);
                $($this).toggleClass("selectAll");
                if($this.hasClass("selectAll")){  
                    $spSelected.removeClass("nselected")
                }else{  
                    $spSelected.addClass("nselected")
                }
                zongjia();
                
            })

            $(".cartCheckbox span").click(function(){
                // var $this=e.target;
                var $this=$(this);
                if(!$this.hasClass("nselected")){
                    $this.addClass("nselected")
                    for(var i=0;i<$spSelected.length;i++){
                        if( $($spSelected[i]).hasClass("nselected")){
                            $(".f1 span").removeClass("selectAll")
                        }
                    }
                }else{
                    $this.removeClass("nselected")
                    $(".f1 span").removeClass("selectAll")

                    var unSelected=document.querySelectorAll(".cartCheckbox span.nselected")
                    
                    if(unSelected.length==0){
                        $(".f1 span").addClass("selectAll")
                    }
                }
                zongjia();
                
            })  
             //计算被选中的小计的总和
             zongjia();
        function zongjia(){
             //声明变量保存总价
             var totalPrice=0
             //查找所有的小计
             var subPrices=document.querySelectorAll(".subtotal");
             
              for(var subPrice of subPrices){
                   var money=subPrice.innerHTML.slice(1)
                   totalPrice+=Number(money)
              }
             //查找没有被选中的小计
             var nS=document.querySelectorAll(".cartCheckbox .nselected")
             var nSp=0
             for(var n of nS){
                nSp+=Number(n.parentNode.parentNode.children[5].children[0].innerHTML.slice(1))
             }
 
             //查找总价
             var J_SumZongJia=document.getElementById("J_SumZongJia");
             var J_SumCount=document.getElementById("J_SumCount");
             J_SumCount.innerHTML=subPrices.length-nS.length
             J_SumZongJia.innerHTML="￥"+(totalPrice-nSp).toFixed(1);
            
        }
           
              
        }
            
    })
   
    
}
            
            
              
getCartList();
           

$(".recommended_panel .tablist ul li").hover(function(){
    var $this = $(this);
    $this.addClass("cur").siblings().removeClass("cur");
    var thisIndex = $this.index();
    $(".recommended_panel .content_panel ul").eq(thisIndex).addClass("cur").siblings().removeClass("cur");
    })
