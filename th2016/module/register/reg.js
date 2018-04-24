define(function(){

	function Reg(){}

	Reg.prototype.init = function(){
		this.oUser = document.getElementById('user');
		this.oPass = document.getElementById('pass');
		this.oPass2 = document.getElementById('pass2');
		this.oTel = document.getElementById('tel');
		this.oCode = document.getElementById('yzCode');
		this.oBtn = document.getElementById('btn');
		this.aShow = document.getElementsByClassName('disShow');
		var that = this;
		this.oBtn.onclick = function(){
			if(that.oUser.value != "" && that.oPass.value != "" &&that.oPass2.value !="" && that.oTel.value !=""&&that.oCode.value !=""){
				that.setCookie();
			}else{
				$(that.aShow).show();
			}
		}
	}
	Reg.prototype.setCookie = function(){
		var random = Math.round(Math.random()*1000);
		var  str = '{'+
					'"userId":"'+ random + '",'+
					'"pass":"'+ this.oPass.value +'",'+
					'"userName":"'+ this.oUser.value +'",'+
					'"onOff":"'+ false + ' " '+
				'}';
		createCookie(this.oUser.value,str,100000); //  创建cookie 将数据保存到cookie 的 value中
		window.location.href = "http://localhost/H5/th2016_1_2/login.html";
	}

	function createCookie(key,value,day){
		var d = new Date();  //获取当前时间
		d.setDate(d.getDate() + day);//设置时间
		document.cookie = key +"="+ value + ";expires="+ d +";path= /";// 注意 这里是设置后的时间和变量拼接
	};
	return Reg;
})




























































