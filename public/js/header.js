
//包含页头相关的所有代码
$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(html){
            //console.log(html)
            $(html).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("head");

            var uname=sessionStorage.getItem("uname");
            var reg=document.getElementById("reg");
            if(uname){
                var html=`${uname}`;
                html+=`<a href="login.html">退出</a>`;
                reg.innerHTML=html;
                // sessionStorage.removeItem("uname");
                $.ajax({
                    url:"http://127.0.0.1:8080/user/query",
                     type:"get",
                     data:{uname:uname},
                     dataType:"json",
                     success:function(result){
                         console.log(result)
                         $hCart=$("#hCart")
                         $hCart.attr("href","cart.html?user_id="+result[0].uid)
                     }

                })
            }else{
                var html=`请
                <a href="login.html" title="用户登录">登录</a>
                <span class="header_top_xian">|</span>
                <a href="reg.html" title="新用户注册">注册</a>`;
                reg.innerHTML=html;
            }
            //点击搜索
            //获取搜索框输入的值
            var searchInput=document.getElementById("searchInput");
            var aBtn=searchInput.nextElementSibling;
            aBtn.onclick=function(){
                location.href="booklist.html?pname="+escape(searchInput.value);
            }
            
            
            
            



            
        }
    })
})
