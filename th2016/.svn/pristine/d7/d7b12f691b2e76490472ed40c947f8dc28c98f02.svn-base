/*Login 登录框*/

//显示隐藏class名：disShow
//输入框变色class名：changeColor

/*获得光标时输入框变色*/
define(function(){
	function login(){}
	login.prototype.init =function(){
		this.user = $("#user");
		this.password = $("#password");
		this.$userVal = this.user.val();
		this.$passwordVal = this.password.val();
	}
	login.prototype.changeColor = function(){
		$(".changeColor").focus(function(){
			$(this).parent().css({
				borderColor:"#3FC230"
			})
		})
// 失去光标时输入框变色
		$(".changeColor").blur(function(){
			$(this).parent().css({
				borderColor:"#efefef"
			})
		})
	};
	login.prototype.disShow = function(){
		this.init();
		if(this.$userVal !==""){
			this.user.parent().siblings(".disShow").hide();
			if(this.$passwordVal !== ""){  							//不为空且账号密码正确时,隐藏提示
				this.password.parent().siblings(".disShow").hide();
			}else{
				this.password.parent().siblings(".disShow").show();
			}
		}else{
			this.user.parent().siblings(".disShow").show();
		}
	};
	login.prototype.setCookie =function(){
		var that =this;
		$("#getCookie").click(function(){
			that.init();
			if(that.$userVal !=="" && that.$passwordVal !== ""){
				that.disShow();
				$.cookie(that.$userVal,that.$passwordVal)
			}else{
				that.disShow();
			}
		})
	};
	login.prototype.submit =function(){
		var that = this;
		$("#sub").click(function(){
			console.log(233)
			that.init();
			if(that.$userVal !=="" && that.$passwordVal !== ""){
				that.disShow();
			}else{
				that.disShow();
			}
		})
	}
	return login;
})




















































































