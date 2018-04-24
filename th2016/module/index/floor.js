define(function(){
	;(function(){
		"ust strict";
		$.fn.floor = function(json){
			json.aClickobj.on("click",function(){
				var $a = json.aFloor.eq($(this).index());
				$("body,html").animate({
					scrollTop:$a.offset().top
				})
			})
		}
	})(jQuery)
	return $;
})