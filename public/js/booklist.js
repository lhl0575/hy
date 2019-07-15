var pname=unescape(location.search.split("=")[1]);
console.log(pname)
$.ajax({
    url:"http://127.0.0.1:8080/product/search",
    type:"get",
    data:{pname},
    dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
    success:function(result){
        console.log(result)
        var productList=result;
        var bookList=document.getElementById("bookList");
        var html="";
        for(var p of productList){
             html+=`<li>
            <div class="cover">
                <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                </a>
            </div>
            <div class="infor">
                <h2 class="name">${p.pname}</h2>
                <div class="otherInfor">
                    <span>${p.author}</span>
                    <i>/</i>
                    <span class="publishTiem">2018-10-15</span>
                    <i>/</i>
                    <span class="publisher">${p.source_name}</span>
                </div>
                <div class="priceWrap">
                    <span class="sellPrice">￥${(p.price*0.8).toFixed(1)}</span>
                    <span class="priceTit">定价:</span>
                    <del>￥${p.price}</del>
                </div>
                <p class="recoLagu">${p.details}</p>
                <div class="oparateButton">
                    <a href="#" class="buyButton">加入购物车</a>
                    <a href="#" class="collectBtn">收藏</a>
                </div>
            </div>
        </li>`;
            bookList.innerHTML=html;
        }
       
    }
})