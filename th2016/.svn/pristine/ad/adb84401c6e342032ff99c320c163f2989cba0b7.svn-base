	define(function(){
		function smallFn(){}
		smallFn.prototype.ajaxBuildBanner = function(jsonB){
			// 获取轮播图数据   添加到页面
			$.ajax({
				url:"http://localhost/H5/th2016_1_2/php/PHPBanner.php",
				data:{
					"banner":"img"
				},
				async:false, // 此处必须同步，不然轮播插件不执行
				success:function(res){
					var jsonData = JSON.parse(res);
					for(var i = 0; i < jsonData.length; i++){
						$img = $("<img src = "+ jsonData[i].src +">");
						$li = $("<li>");
						$li.append($img);
						$span = $("<span>");
						$span.css({
							margin:1
						})
						jsonB.aImgs.append($li);
						jsonB.aList.append($span);
					}
					jsonB.aList.find("span").eq(0).addClass("active");
				}
			});
		};
		smallFn.prototype.ajaxGoodList = function(){
			var that = this;
			$.ajax({
				url:"http://localhost/H5/th2016_1_2/php/PHPBanner.php",
				data:{
					"goodsList":"goodDetails"
				},
				async:false,
				success:function(res){
					that.json = JSON.parse(res);
					var str = "";
					for(var j = 0; j < that.json.length; j++){
							str += `<li>
										<img src=" ${that.json[j].src}" alt="">
										<div class="title"><a href="javaScript:;"> ${that.json[j].name} </a></div>
										<div class="price">
											<span>${that.json[j].newPri}</span>
											<i>${that.json[j].oldPri}</i>
										</div>
										<b class = "addGood">加入购物车</b>
									</li>`;
					}
					$(".newGood2").find("ul").html(str);
// 	给每个li添加点击进入事件
					$(".newGood2").find(".title a").on("click",function(){
						window.location.href = "http://localhost/H5/th2016_1_2/goodsDetail.html?"+'00'+$(this).parent().parent().index();
					})
				}
			});
			this.addCookie();
		};
		smallFn.prototype.addCookie = function(json){
			var that = this;
			$("b.addGood").on("click",function(){ // 此处需要的是li 的索引 不是 b 元素的索引
				setCookie("id_"+$(this).parent().index(),'{'+
					'"goodId":"'+that.json[$(this).parent().index()].id+'",'+
					'"goodSrc":"'+that.json[$(this).parent().index()].src+'",'+
					'"goodName":"'+that.json[$(this).parent().index()].name+'",'+
					'"goodPri":"'+that.json[$(this).parent().index()].newPri+'"'+
					'}',100);
			});
			this.getGoodCookie(); // 获取商品的cookie
		};
		smallFn.prototype.getGoodCookie = function(){
			var keyC = document.cookie; // 获取所有的cookie
				var aCookie = keyC.split("; "); // 切割cookie
				count = 0; // 统计加入购物车 商品的数量
				for(var i = 0; i < aCookie.length;i++){  // 切割后的cookie 进行筛选
					if(aCookie[i].slice(0,2) == "id"){
						count++;
						$("#goodsNum").html(count); // 改变购物车栏商品个数
					};
				}
			$("#goodsNum").html(count);
		}
		smallFn.prototype.searchJsonp = function(){  // 搜索框的跨域请求
			var that = this;
			$("#searchVal").on("keyup",function(){
				if($val != ""){
				var $val = $("#searchVal").val();
					clearTimeout(that.searchJsonp.iTimer);
					that.searchJsonp.iTimer = setTimeout(function(){
						$.ajax({
							url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+ $val +"&json=1&p=3&sid=&req=2&csor=3&pwd=16&cb=callback",
							dataType:"jsonp",
							jsonpCallback:"callback",
							json:"cb",
						}).then(function(data){
							if(data.s != undefined && data.s !=""){
								var sss = "";
								for(var i = 0; i < 5; i++){
									sss +=`<li>${data.s[i]}<li>`;
								} 
								$(".jsonUl").get(0).style.display = "block";
								$(".jsonUl").html(sss);
							}else{
								$(".jsonUl").get(0).style.display = "none";
							}
						},function(v){
							console.log("请求失败");
						})
					},60)
				}else{
					$(".jsonUl").html("");
				}
			})
		}
		function setCookie(name,value,timer){
	        var date =new Date;
	        date.setDate(date.getDate()+timer);
	        document.cookie = name+"="+value+";expires="+date+";path=/";
	    }
		return smallFn;
	})
