



$(function(){
    //向服务端接口127.0.0.1:8080/product/list发送ajax请求，获得返回的数组对象
    $.ajax({
        url:"http://127.0.0.1:8080/product/list",
        type:"get",
        dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
        success:function(result){
            // 新品特惠中的产品
            var product1=result[0];
            var html=` <div class="tabContent_top_img">
            <a href="product_detail.html?pid=${product1.pid}">
              <img src="${product1.pic}" alt="">
            </a>
            <div class="price_icon">
              <img src="../image/tubiao47.png" alt="">
            </div>
          </div>
          <div class="tabContent_top_right">
            <h2>
              <a href="product_detail.html?pid=${product1.pid}">${product1.pname}</a>
            </h2>
            <div class="priceWrap">
              <span class="sellprice">¥${(product1.price*0.7).toFixed(1)}</span>
              <span class="price">¥${product1.price}</span>
            </div>
            <div class="mainFont">
              <p>
                ${product1.details}
              </p>
            </div>
          </div>`;
          //将填充好的HTML片段，放入页面中指定的父元素下
            document.getElementById("product1").innerHTML=html;

           for(var i=1;i<=4;i++){
            var p="product";
            var id=p+(i+1);
              p=result[i];
              var html=`<div class="Img">
              <a href="product_detail.html?pid=${p.pid}">
                <img src="${p.pic}" alt="">
              </a>
            </div>
            <div class="name">
              <a href="product_detail.html?pid=${p.pid}">${p.details}</a>
            </div>
            <div class="priceWrap">
                <span class="sellprice">¥${(p.price*0.8).toFixed(1)}</span>
                <span class="price">¥${p.price}</span>
                <div class="icon">
                  <img src="../image/tubiao45.png" alt="">
                </div>
            </div>`;
            var id=document.getElementById(id);
            id.innerHTML=html;
           }
           //本周精选中的产品
           var product6=result[5];
           var html=` <div class="tabContent_top_img">
           <a href="product_detail.html?pid=${product6.pid}">
             <img src="${product6.pic}" alt="">
           </a>
           <div class="price_icon">
             <img src="../image/tubiao47.png" alt="">
           </div>
         </div>
         <div class="tabContent_top_right">
           <h2>
             <a href="product_detail.html?pid=${product6.pid}">${product6.pname}</a>
           </h2>
           <div class="priceWrap">
             <span class="sellprice">¥${(product6.price*0.7).toFixed(1)}</span>
             <span class="price">¥${product6.price}</span>
           </div>
           <div class="mainFont">
             <p>
               ${product6.details}
             </p>
           </div>
         </div>`;
         //将填充好的HTML片段，放入页面中指定的父元素下
           document.getElementById("product6").innerHTML=html;
           for(var i=6;i<=9;i++){
            var p="product";
            var id=p+(i+1);
              p=result[i];
              var html=`<div class="Img">
              <a href="product_detail.html?pid=${p.pid}">
                <img src="${p.pic}" alt="">
              </a>
            </div>
            <div class="name">
              <a href="product_detail.html?pid=${p.pid}">${p.details}</a>
            </div>
            <div class="priceWrap">
                <span class="sellprice">¥${(p.price*0.7).toFixed(1)}</span>
                <span class="price">¥${p.price}</span>
                <div class="icon">
                  <img src="../image/tubiao47.png" alt="">
                </div>
            </div>`;
            var id=document.getElementById(id);
            id.innerHTML=html;
           }
        //新书速递中的产品
        var product11=result[10];
        var html=` <div class="tabContent_top_img">
        <a href="product_detail.html?pid=${product11.pid}">
          <img src="${product11.pic}" alt="">
        </a>
        <div class="price_icon">
          <img src="../image/tubiao47.png" alt="">
        </div>
      </div>
      <div class="tabContent_top_right">
        <h2>
          <a href="product_detail.html?pid=${product11.pid}">${product11.pname}</a>
        </h2>
        <div class="priceWrap">
          <span class="sellprice">¥${(product11.price*0.7).toFixed(1)}</span>
          <span class="price">¥${product11.price}</span>
        </div>
        <div class="mainFont">
          <p>
            ${product11.details}
          </p>
        </div>
      </div>`;
      //将填充好的HTML片段，放入页面中指定的父元素下
        document.getElementById("product11").innerHTML=html;
        for(var i=11;i<=14;i++){
         var p="product";
         var id=p+(i+1);
           p=result[i];
           var html=`<div class="Img">
           <a href="product_detail.html?pid=${p.pid}">
             <img src="${p.pic}" alt="">
           </a>
         </div>
         <div class="name">
           <a href="product_detail.html?pid=${p.pid}">${p.details}</a>
         </div>
         <div class="priceWrap">
             <span class="sellprice">¥${(p.price*0.8).toFixed(1)}</span>
             <span class="price">¥${p.price}</span>
             <div class="icon">
               <img src="../image/tubiao48.png" alt="">
             </div>
         </div>`;
         var id=document.getElementById(id);
         id.innerHTML=html;
        }
        //读者热评中的商品
        var product16=result[15];
        var html=` <div class="tabContent_top_img">
        <a href="product_detail.html?pid=${product16.pid}">
          <img src="${product16.pic}" alt="">
        </a>
        <div class="price_icon">
          <img src="../image/tubiao47.png" alt="">
        </div>
      </div>
      <div class="tabContent_top_right">
        <h2>
          <a href="product_detail.html?pid=${product16.pid}">${product16.pname}</a>
        </h2>
        <div class="priceWrap">
          <span class="sellprice">¥${(product16.price*0.7).toFixed(1)}</span>
          <span class="price">¥${product16.price}</span>
        </div>
        <div class="mainFont">
          <p>
            ${product16.details}
          </p>
        </div>
      </div>`;
      //将填充好的HTML片段，放入页面中指定的父元素下
        document.getElementById("product16").innerHTML=html;
        for(var i=16;i<=19;i++){
         var p="product";
         var id=p+(i+1);
           p=result[i];
           var html=`<div class="Img">
           <a href="product_detail.html?pid=${p.pid}">
             <img src="${p.pic}" alt="">
           </a>
         </div>
         <div class="name">
           <a href="product_detail.html?pid=${p.pid}">${p.details}</a>
         </div>
         <div class="priceWrap">
             <span class="sellprice">¥${(p.price*0.8).toFixed(1)}</span>
             <span class="price">¥${p.price}</span>
             <div class="icon">
               <img src="../image/tubiao48.png" alt="">
             </div>
         </div>`;
         var id=document.getElementById(id);
         id.innerHTML=html;
        }
        for(var i=26;i<=35;i++){
            var p="zp";
            var id=p+(i-25);
              p=result[i]; 
              var html=`<i>${i-25}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.8).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }
         // 文学榜
        for(var i=36;i<=45;i++){
            var p="wp";
            var id=p+(i-35);
              p=result[i]; 
              var html=`<i>${i-25}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.8).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }   
         // 社科榜
         for(var i=46;i<=55;i++){
            var p="skp";
            var id=p+(i-45);
              p=result[i]; 
              var html=`<i>${i-45}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.8).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }       
         // 少儿榜
         for(var i=56;i<=65;i++){
            var p="sep";
            var id=p+(i-55);
              p=result[i]; 
              var html=`<i>${i-55}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.7).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }       
        // 艺术
        for(var i=66;i<=75;i++){
            var p="yp";
            var id=p+(i-65);
              p=result[i]; 
              var html=`<i>${i-65}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.7).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }            
        //文教
        for(var i=76;i<=85;i++){
            var p="wjp";
            var id=p+(i-75);
              p=result[i]; 
              var html=`<i>${i-75}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.7).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }               
         //生活
         for(var i=86;i<=95;i++){
            var p="shp";
            var id=p+(i-85);
              p=result[i]; 
              var html=`<i>${i-85}</i>
              <em>&gt;</em>
              <p>${p.pname}</p>
              <div class="bookCur">
                <div class="bpic" title="${p.pname}">
                  <a href="product_detail.html?pid=${p.pid}">
                    <img src="${p.pic}" alt="">
                  </a>
                </div>
                <div class="bDetai">
                    <div class="bName">
                      <a href="product_detail.html?pid=${p.pid}" title="${p.pname}">${p.pname}</a>
                    </div>
                    <div class="bPrice">
                        <span class="sellPrice">￥${(p.price*0.7).toFixed(1)}</span>
                        <span class="price">￥${p.price}</span>
                    </div>
                </div>
              </div>`;
                var id=document.getElementById(id);
                id.innerHTML=html;
        }                   




    }
    })

    $(".kindFloor .floorTit ul li").hover(function () {
        var $this = $(this);
        var thisIndex = $this.index();
        var obj = $this.parents(".kindFloor").find(".floorTabItem ");

        $this.addClass("cur").siblings().removeClass("cur");
        obj.eq(thisIndex).addClass("cur").siblings().removeClass("cur");
    })
    $(".seriesBook ul li").hover(function(){
    var $this=$(this);
    $this.addClass("cur").siblings().removeClass("cur")
    })
    $(".otherFloor .otherTit ul li").hover(function(){
    var $this = $(this);
    $this.addClass("cur").siblings().removeClass("cur");
    var thisIndex = $this.index();
    $(".otherFloor .otherBook ul").eq(thisIndex).addClass("cur").siblings().removeClass("cur");
    })
    $(".butWrap .downArrow").click(function(){
    var $this=$(this);
    $this.addClass("nextStop").siblings().removeClass("prevStop")
    $(".pubUL ul").css({top:"-420px"});
    })
    $(".butWrap .upArrow").click(function(){
    var $this=$(this);
    $this.addClass("prevStop").siblings().removeClass("nextStop")
    $(".pubUL ul").css({top:"0px"});
    })
    $(".pubLeft .pubUL ul li").hover(function(){
    var $this = $(this);
    $this.addClass("cur").siblings().removeClass("cur");
    var thisIndex = $this.index();
    $(".pubRight .pubItem").eq(thisIndex).addClass("cur").siblings().removeClass("cur");
    })


})