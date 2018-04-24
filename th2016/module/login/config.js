
require([
	"module/login/login",
	"module/login/loginYz"
	],function(login,cookie){
	new login().changeColor();
	new login().setCookie();
	new login().submit();
	new cookie().init();
})