define(function(){

	function goodCookie(){}

	goodCookie.prototype.init = function(){
		this.shopList = document.getElementsByClassName('shopList')[0];
		this.aPrice = [];
		var keyC = document.cookie; // 获取所有的cookie
		var aCookie = keyC.split("; "); // 切割cookie 
		var aGoodList = [];
		for(var i = 0; i < aCookie.length;i++){  // 切割后的cookie 进行筛选
			if(aCookie[i].slice(0,2) == "id"){
				aGoodList.push((aCookie[i]).split("="));  // 获取到加入购物车的cookie
			};
		}
		var strDiv = "";
		for(var m = 0 ; m < aGoodList.length; m++){
			var jsonData = JSON.parse(aGoodList[m][1]);
				strDiv = `<ul>
					<li><input type="checkbox"></li>
					<li>
						<img src="${jsonData.goodSrc}" alt="">
						<a href="">${jsonData.goodName}</a>
					</li>
					<li class = "">${jsonData.goodPri}</li>
					<li><i class ="jian">-</i><input type="text" value="1" class ="selectNum"><i class="jia">+</i></li>
					<li class= "sTotal">${jsonData.goodPri}</li>
					<li><a href="javaScript:;" class = "del">移除商品</a></li>
				</ul>`
				this.shopList.innerHTML += strDiv;
					var that = this;
					var pr = parseFloat(jsonData.goodPri.slice(1));
					this.aPrice.push(pr);
					this.deleteGood();
			this.totalPri1 = document.getElementById('totalPri1'); // 页面总价格
			this.jianBtn = document.getElementsByClassName('jian');
			this.jiaBtn = document.getElementsByClassName('jia');
			this.sTotal = document.getElementsByClassName('sTotal');
			this.selectNum = document.getElementsByClassName('selectNum');
		};
		this.changePri();
	}
/*	goodCookie.prototype.totalPri = function(json){
		var that = this;
		var pr = parseFloat(json.goodPri.slice(1));
		console.log(this.aPrice.push(pr))
		
	}*/
		goodCookie.prototype.changePri = function(){
			var that = this;

/*			for(var i = 0 ; i < this.jiaBtn.length;i++){
				this.jiaBtn[i].index = i;
				this.jiaBtn[i].onclick  = function(){

				}
			}*/

			var nnnn = 0;
			for(var i = 0; i < this.jiaBtn.length; i++){
				var totalNum =1;
				this.jiaBtn[i].index = i;
				$(this.jiaBtn[i]).on("click",function(){
					totalNum +=1;
					$(this).siblings(".selectNum").val(totalNum);
					$(that.sTotal[this.index]).html(that.aPrice[this.index]*totalNum);
					
				})
				$(this.jianBtn[i]).on("click",function(){
					if(totalNum > 1){
						totalNum -=1;
						$(this).siblings(".selectNum").val(totalNum);
						$(that.sTotal[this.index]).html(that.aPrice[this.index]*totalNum);
					}else{
						$(that.jianBtn[i]).siblings(".selectNum").val(1);
					}
				})
				nnnn += $(that.sTotal[i]).html()
			}
			aPP = nnnn.split("￥");
			var ttt = 0;
			for(var j = 0 ; j< aPP.length;j++){
				ttt +=parseFloat(aPP[j]);
			}
			that.totalPri1.innerHTML = ttt;

		}
	goodCookie.prototype.deleteGood = function(){
		this.del = document.getElementsByClassName('del');
		$(this.del).on("click",function(){
			$(this).parent().parent().remove();
		})
	}
	function getCookie(name){
	    var arr = document.cookie.split("; ");
	    for(var i=0;i<arr.length;i++){
	        arr2 = arr[i].split("=");
	        if(arr2[0] == name){
	            return arr2[1];
	        }
	    }
	    return "";
	 }


	return goodCookie;
})