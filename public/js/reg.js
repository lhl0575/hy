var uname=document.getElementById("uname");
var duname=document.getElementById("duname");
var upwd=document.getElementById("upwd");
var dupwd=document.getElementById("dupwd");
var upwd2=document.getElementById("upwd2");
var dupwd2=document.getElementById("dupwd2");
var registBtn=document.getElementById("registBtn");

uname.onblur=function(){

    if(uname.value==""){
        duname.style.color="#f00"
        duname.innerHTML="用户名不能为空";
    }else if(uname.value.length>0 & uname.value.length<6){
        duname.style.color="#f00"
        duname.innerHTML="用户名不能少于6位";
    }else{
        duname.style.color="#0f0"
        duname.innerHTML="用户名可以使用";
    }
       //1.创建 xhr对象
    var xhr=new XMLHttpRequest();
       //4.绑定监听，接收响应
       xhr.onreadystatechange=function(){
           if(xhr.readyState==4&&xhr.status==200){
               var result=xhr.responseText;
               //var user=JSON.parse(result);
               //console.log(user);
               if(result.length>0){
                duname.style.color="#f00"
                duname.innerHTML="用户名已占用";
               }
           }
       }
       //2.打开链接，创建请求
       xhr.open("get","/user/query?uname="+uname.value,true);
       //3.发送请求
       xhr.send(null);
       
   }

upwd.onblur=function (){
    if(upwd.value==""){
        dupwd.style.color="#f00"
        dupwd.innerHTML="密码不能为空";
    }else if(upwd.value.length>0 & upwd.value.length<6){
        dupwd.style.color="#f00"
        dupwd.innerHTML="密码长度不能少于6位";
    }else{
        dupwd.style.color="#0f0"
        dupwd.innerHTML="密码格式正确";

    }
   }
   upwd2.onblur=function(){
    if(upwd2.value==""){
     dupwd2.style.color="#f00"
      dupwd2.innerHTML="确认密码不能为空";
    }else if(upwd.value==upwd2.value){
        dupwd2.style.color="#0f0"
        dupwd2.innerHTML="两次输入的密码一致";
    }else if(upwd.value !==upwd2.value){
        dupwd2.style.color="#f00"
        dupwd2.innerHTML="两次输入的密码不一致";
    }
   }

   registBtn.onclick=function(){
    if(duname.innerHTML="用户名可以使用" && upwd.value==upwd2.value){
    
        //1.创建 xhr对象
            var xhr=new XMLHttpRequest();
            //2.打开链接，创建请求
            xhr.open("post","/user/reg",true);
                //设置请求消息头，修改接收所有字符
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            var formdata="uname="+uname.value+"&upwd="+upwd.value;
            //3.发送请求
            xhr.send(formdata);
            //4.绑定监听，接收响应
            xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                console.log(result);
                location.href="login.html"
            }
        }
    }
   }




