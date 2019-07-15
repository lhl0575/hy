var uname=document.getElementById("uname");
var umegTip=document.getElementById("umegTip");
uname.onblur=function(){
    umegTip.style.display="none"; 
}
uname.onfocus=function(){
    umegTip.style.display="block";
}
var upwd=document.getElementById("upwd");
var pmegTip=document.getElementById("pmegTip");
upwd.onblur=function(){
    pmegTip.style.display="none"; 
}
upwd.onfocus=function(){
    pmegTip.style.display="block";
}

var loginBtn=document.getElementById("loginBtn");
var err=document.getElementById("err");
loginBtn.onclick=function(){
    //1.创建xhr对象
    var xhr=new XMLHttpRequest();
    //4.绑定监听 获取响应
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            result=JSON.parse(result)
            console.log(result.code);
            if(result.code==200){
                var name=sessionStorage.getItem("uname");
                if(name){
                    
                    sessionStorage.removeItem("uname");
                }else{
                    sessionStorage.setItem("uname",uname.value);
                }
                
                location.href="index.html";
            }else{
                err.style.display="block";
            }
        }
    }
    //2.创建请求
    xhr.open("post","user/login",true);
    //3.发送请求
    //修改请求头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var formdata="uname="+uname.value+"&upwd="+upwd.value;

    xhr.send(formdata);
}
