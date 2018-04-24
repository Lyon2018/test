//https://count.taobao.com/counter6?keys=TCART_234_254adf438e802ed0b40ab2b4e7ef58e7_q&_ksTS=1516434377315_1889&callback=cb
//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=163&json=1&p=3&sid=&req=2&pbs=163&csor=3&pwd=16&cb=jQuery11020007597951093298416_1516435069321&_=1516435069327
define(function(){
	;(function(){
		"ust strict";
		$.fn.jsonp = function(json){
			json.eventObj.on("keydown",function(){
				$.ajax({
					url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+ json.value+"&json=1&p=3&sid=&req=2&pbs=163&csor=3&pwd=16&cb=callback",
					method:"json.method",
					dataType:"jsonp",
					jsonp:"cb",
					jsonpCallback:"callback",
					success:function(res){
						console.log(res);
					},
					error:function(){
						console.log("请求失败");
					}
				})
			})
		}

	})(jQuery);
	return $;
})