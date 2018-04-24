define(function(){

	function cookie(){}
	cookie.prototype = {
		constructor:cookie,
		init:function(){
			this.user = document.getElementById('user');
			this.password = document.getElementById('password');
			this.Btn = document.getElementById('sub');
			this.getCookie();
		},
		getCookie:function(){
			var that = this;
			this.Btn.onclick = function(){
				var cookieVal =  getCookie(that.user.value);
				if(cookieVal != ""){
					var res = JSON.parse(cookieVal);
					if(res.pass == that.password.value && that.password.value != ""){
						res.onOff= "true";
						var str = JSON.stringify(res);
						setCookie(res.userName,str,1000);
						$(".errorBox2").animate({
							left:555
						})
						window.location.href = "http://localhost/H5/th2016_1_2/index.html?"+that.user.value;
					}else{
						$(".errorBox2").animate({
							left:550
						})
					}
				}else{
					$(".errorBox1").animate({
							left:655
						})
					$(".errorBox2").animate({
							left:655
						})
				}
			}
		}
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
	function setCookie(name,value,timer){
	    var date =new Date;
	    date.setDate(date.getDate()+timer);
	    document.cookie = name+"="+value+";expires="+date+";path=/";
	}
	return cookie;
})