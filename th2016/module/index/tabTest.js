define(function(){
	;(function(){
		"use strict";
		$.fn.tab = function(json){
			this.aLis = json.aLis;   // 可以优化不需要储存通过 json.XX  直接使用即可
			this.goodShow = json.goodShow;// 可以优化不需要储存通过 json.XX  直接使用即可
			var that = this;
			if(json.clickEvent == true){  // 鼠标点击事件 
				this.aLis.on("click",function(){
					that.aLis.removeClass("active").eq($(this).index()).addClass("active");
					if(that.goodShow != undefined || typeof that.goodShow == "object"){
						that.goodShow.css({
							display:"none"
						}).eq($(this).index()).css({
							display:"block"
						})
					}
				})
			}else{
				this.aLis.on("mouseenter",function(){  // 鼠标经过事件
					that.aLis.removeClass("active").eq($(this).index()).addClass("active");
					if(that.goodShow != undefined || typeof that.goodShow == "object"){
						that.goodShow.css({
							display:"none"
						}).eq($(this).index()).css({
							display:"block"
						})
					}
				})
			} 
			if(json.displayNone == true){  // 鼠标离开后是否隐藏
				
				this.aLis.on("mouseleave",function(){
					that.goodShow.css({
						display:"none"
					});
				});
			}
		}
	})(jQuery)
	return $;
})