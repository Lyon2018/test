define(function(){
	function Register(){};

	Register.prototype.disShow = function(json){
			json.eventObj.focus(function(){
				if($(this).val() ==""){
					$(this).parent().siblings(".disShow").show();
				}
			})
			json.eventObj.blur(function(){
				$(this).parent().siblings(".disShow").hide();
			})
	}
	Register.prototype.yzRegister = function(json){
		var zhanghaoReg =/^[\w\-\u2E80-\u9FFF]{4,20}$/;
		var mimaReg=/^[a-zA-Z0-9]{6,18}$/;
		var shoujiReg =/^1[0-9]{10}$/;
		var that = this;
		this.fourCode = "";
		json.randomCode.on("click",function(){
			that.fourCode = "";
			for(var i = 0;i < 4;i++){
				var random = Math.round(Math.random()*9);
				that.fourCode += ""+random;
			}
			json.randomCode.html(that.fourCode);
		});
		json.yanzhengma.on("change",function(){
			if(json.yanzhengma.val() == that.fourCode){
				$(this).parent().parent().find("p").find("span.complete").html("@");
				json.randomCode.html("正确");
			}else{
				json.randomCode.html("错误");
				$(this).parent().parent().find("p").find("span.complete").html("*");
			}
		});
		this.onOff = true;
		json.zhanghao.on("change",function(){
			if(zhanghaoReg.test(json.zhanghao.val())){
				$(this).parent().siblings("p").find(".complete").html("@");
			}else{
				json.zhanghao.val("用户名不可用");
				$(this).parent().siblings("p").find(".complete").html("*");
			}
		});
		json.mima.on("change",function(){
			if(mimaReg.test(json.mima.val())){
				$(this).parent().siblings("p").find(".complete").html("@");
			}else{
				alert("密码为6-18位字母/数字/下划线");
				$(this).parent().siblings("p").find(".complete").html("*");
			}
		});
		json.mima2.on("change",function(){
			if(json.mima.val() === json.mima2.val()){
				$(this).parent().siblings("p").find(".complete").html("@");
			}else{
				alert("两次输入密码不同，请重新输入");
				$(this).parent().siblings("p").find(".complete").html("*");
			}
		});
		json.shouji.on("change",function(){
			if(shoujiReg.test(json.shouji.val())){
				$(this).parent().siblings("p").find(".complete").html("@");
			}else{
				json.shouji.val("手机号码格式错");
				$(this).parent().siblings("p").find(".complete").html("*");
			}
		})
		$("#chose").click(function(){
			for($j = 0 ; $j < $(".complete").length;$j++){
				if($(".complete").eq($j).html() != "@"){
					$("#btn").get(0).style.display = "none";
					break;
				}else{
					if($("#chose").prop("checked")){
						$("#btn").get(0).style.display = "block";
					}else{
						$("#btn").get(0).style.display = "none";
					};
				}
			}
		})
	
	}
	return Register;
})