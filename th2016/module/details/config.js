require([
	"module/index/tabTest",   // Tab切换
	"module/details/enlarge", // 放大镜
	"module/details/details"  // 详情页 小 效果
	],function(tabTest,enlarge,fn){

// 执行nav部分
	tabTest(".goodInfo").tab({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用
		aLis:$(".goodInfo").find("li"),
		goodShow:$(".mainDetail").find(".infoBox"),
		clickEvent:true
	});
/*放大镜*/
	new enlarge().init({
		eventObj:$(".detailMainImg").find(".smallImg"),
		mask:$(".smallImg").find(".mask"),
		wall:$(".smallImg").find(".wall"),
		showBox:$(".detailMainImg").find(".bigImg"),
		imgBox:$(".bigImg").find(".imgBox")
	})
	tabTest(".bigImgBtm").tab({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用
		aLis:$(".bigImgList").find("li"),
		goodShow:$(".show").find("img"),
		clickEvent:true
	});
	tabTest(".bigImgBtm").tab({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用
		aLis:$(".bigImgList").find("li"),
		goodShow:$(".imgBox").find("img"),
		clickEvent:true
	});



/*尤为接口 <http://m.wconcept.cn/api/rest/wcc/productsv2/childhot/3?filter=channel_configuration_shoes&limit=10&page=1>*/
/*京东接口 'https://dc.3.cn/category/get?callback=callBack'*/


})