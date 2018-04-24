
require(
	[
	"module/register/register",
	"module/login/login",
	"module/register/reg"
	],function(register,login,reg){
	new register().disShow({
		zhanghao:$("#user"),
		mima:$("#pass"),
		mima2:$("#pass2"),
		shouji:$("#tel"),
		yanzhengma:$("#yzCode"),
		randomCode:$("#code"),
		eventObj:$(".changeColor"),
		obj:$(".disShow")
	})	
	new login().changeColor(); //输入框获取光标时外框变色

	new reg().init(); // 提交时 简单验证
	new register().yzRegister({ //正则验证
		zhanghao:$("#user"),
		mima:$("#pass"),
		mima2:$("#pass2"),
		shouji:$("#tel"),
		yanzhengma:$("#yzCode"),
		randomCode:$("#code"),
	});
})