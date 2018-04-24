define(function(){
	;(function(){
		"use strict";
		
		$.fn.extend({
			banner:function(json){ // 此时json 是全局对象
				this.LOCAl = {  // 添加全局对象 储存下面的方法
					iNow : 0           //添加一个变量储存当前下标值
				};  
				json.imgs.css({ 
					left:json.imgs.eq(0).width()//设置初始化位置
				}).eq(0).css({
					left:0
				});
				this.LOCAl.moveDirect = function(){ // 判断 span 放入的下标 判断运动方向
					var that = this;
					json.items.on("mouseenter",function(){
						if($(this).index() == that.iNow){ // 相同下标时不运动
							return 0;
						}
						if($(this).index() > that.iNow){
							that.move($(this).index(),that.iNow,1)
						}
						if($(this).index() < that.iNow){
							that.move($(this).index(),that.iNow,-1)
						}
						that.iNow = $(this).index();
						json.items.removeClass("active").eq($(this).index()).addClass("active"); // 改变span 的class名
					})
				}
				this.LOCAl.move = function(indexEnter,indexLeave,dir){ // 运动函数合并封装，dir 决定运动的方向
						json.imgs.eq(indexLeave).stop(false,true).animate({
							left:-json.imgs.eq(0).width()*dir
						})
						json.imgs.eq(indexEnter).css({
							left:json.imgs.eq(0).width()*dir
						}).stop(false,true).animate({
							left:0
					})
				}
				this.LOCAl.clickBtn = function(){ //每次点击切换图片
					var count = json.imgs.length-1; // 储存要进入 或 离开图片对应的索引 也相当于计数器
					var that = this;
					json.left.on("click",function(){
						if(that.iNow == 0){
							that.iNow = json.imgs.length-1;
							count = 0;
						}else{
							that.iNow--;
							count = that.iNow + 1; //决定是进入还是离开
						}
						that.move(that.iNow,count,-1);
						json.items.removeClass("active").eq(that.iNow).addClass("active");
					})
					json.right.on("click",function(){
						if(that.iNow == json.imgs.length-1){
							that.iNow = 0;
							count = json.imgs.length-1;
						}else{
							that.iNow++;
							count = that.iNow - 1; //同上
						}
						that.move(that.iNow,count,1);
						json.items.removeClass("active").eq(that.iNow).addClass("active");
					})
				}
				this.LOCAl.autoShow = function(){ //自动轮播
					var that = this;
					clearInterval(this.iTimer);
					this.iTimer = setInterval(function(){
						json.right.trigger("click");
					},4000);
					json.imgs.parent().parent().hover(function(){ //按钮的出现于消失
						clearInterval(that.iTimer);
						json.right.show();
						json.left.show();
					},function(){
						json.right.hide();
						json.left.hide();
						clearInterval(that.iTimer);
						that.iTimer = setInterval(function(){
							json.right.trigger("click");
						},4000);
					});
				}
				if(typeof json.items == "object" && json.items.length != 0){// -判断是否有span
					this.LOCAl.moveDirect(); // 这三个需要执行
				}
				if(typeof json.left == "object" && json.left.length != 0 && typeof json.right == "object" && json.right.length != 0){
					this.LOCAl.clickBtn();   //这三个需要执行
				}
				if(json.autoPlay == true || json.autoPlay == undefined){ //判断是否传入计时器 默认开启计时器
					this.LOCAl.autoShow();  //这三个需要执行
				}
			}
		});
	})(jQuery)
	return $;
})