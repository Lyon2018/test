require([
	"module/index/tabTest",
	"module/index/bannerTest",
	"module/index/floor",
	"module/index/addGoodCar"
	],function(tabTest,bannerTest,floor,smallFn){
	/*new	welcome().init();*/
	new smallFn().ajaxBuildBanner({
 		aImgs:$("#bannerImg"),
 		aList:$("#bannerList")
 	});
//执行大的轮播图
	bannerTest(".banner").banner({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用互不影响
		imgs:$("#bannerImg").find("li"),
		items:$("#bannerList").find("span"),
		left:$("#left"),
		right:$("#right"),
		autoPlay:true
	});
// 执行小的轮播图
// F111111111111111111111
	bannerTest(".asideBanner1").banner({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用互不影响
		imgs:$(".asideBanner1").find("li"),
		items:$(".asideBannerList1").find("span"),
		left:$(".aLeft1"),
		right:$(".aRight1"),
		autoPlay:true
	});
	tabTest(".goodsTitle1").tab({  
		aLis:$(".goodsClass1").find("li"),
		goodShow:$(".goodShowList21").find(".goodsL")
	});
//F22222222222222222222
	bannerTest(".asideBanner2").banner({ 
		imgs:$(".asideBanner2").find("li"),
		items:$(".asideBannerList2").find("span"),
		left:$(".aLeft2"),
		right:$(".aRight2"),
		autoPlay:true
	});
	tabTest(".goodsTitle2").tab({  
		aLis:$(".goodsClass2").find("li"),
		goodShow:$(".goodShowList22").find(".goodsL")
	});
//F33333333333333
	bannerTest(".asideBanner3").banner({ 
		imgs:$(".asideBanner3").find("li"),
		items:$(".asideBannerList3").find("span"),
		left:$(".aLeft3"),
		right:$(".aRight3"),
		autoPlay:true
	});
	tabTest(".goodsTitle3").tab({  
		aLis:$(".goodsClass3").find("li"),
		goodShow:$(".goodShowList23").find(".goodsL")
	});

//F44444444444444444444444
	bannerTest(".asideBanner4").banner({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用互不影响
		imgs:$(".asideBanner4").find("li"),
		items:$(".asideBannerList4").find("span"),
		left:$(".aLeft4"),
		right:$(".aRight4"),
		autoPlay:true
	});
	tabTest(".goodsTitle4").tab({  
		aLis:$(".goodsClass4").find("li"),
		goodShow:$(".goodShowList24").find(".goodsL")
	});

// F5555555555555555555555555
	bannerTest(".asideBanner5").banner({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用互不影响
		imgs:$(".asideBanner5").find("li"),
		items:$(".asideBannerList5").find("span"),
		left:$(".aLeft5"),
		right:$(".aRight5"),
		autoPlay:true
	});
	tabTest(".goodsTitle5").tab({  
		aLis:$(".goodsClass5").find("li"),
		goodShow:$(".goodShowList25").find(".goodsL")
	});
// F666666666666666666666666666
	bannerTest(".asideBanner6").banner({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用互不影响
		imgs:$(".asideBanner6").find("li"),
		items:$(".asideBannerList6").find("span"),
		left:$(".aLeft6"),
		right:$(".aRight6"),
		autoPlay:true
	});
	tabTest(".goodsTitle6").tab({  
		aLis:$(".goodsClass6").find("li"),
		goodShow:$(".goodShowList26").find(".goodsL")
	});
// 执行nav部分
	tabTest(".navLeft").tab({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用
		aLis:$("#list").find("li"),
		goodShow:$(".navCont").find(".navBottom"),
		displayNone:true
	});
// 执行 海外购 大Tab
	tabTest(".goodsList").tab({ // 此版本可以多次使用，以插件的形式封装的 可以多次使用
		aLis:$(".newGoodsList").find("li"),
		goodShow:$(".goodShow").find(".goods")
	});
// 执行 title 部分的切换

// 执行aside轮播图下面的小标签
 	tabTest(".asideBottom1").tab({  
		aLis:$(".asideBottom1").find("li")
	});
		tabTest(".asideBottom2").tab({  
		aLis:$(".asideBottom2").find("li")
	});
			tabTest(".asideBottom3").tab({  
		aLis:$(".asideBottom3").find("li")
	});
				tabTest(".asideBottom4").tab({  
		aLis:$(".asideBottom4").find("li")
	});
					tabTest(".asideBottom5").tab({  
		aLis:$(".asideBottom5").find("li")
	});
						tabTest(".asideBottom6").tab({  
		aLis:$(".asideBottom6").find("li")
	});

/*尤为接口 <http://m.wconcept.cn/api/rest/wcc/productsv2/childhot/3?filter=channel_configuration_shoes&limit=10&page=1>*/
/*京东接口 'https://dc.3.cn/category/get?callback=callBack'*/

/* 楼层效果*/
 	floor(".floatBoxL").floor({
 		aClickobj:$(".floatBoxL").find("li"), // 点击对象
 		aFloor:$(".floorGoods").find(".floor") // 获取所有的楼层
 	});
// ajax 生成轮播图 和 商品列表

// 	 ajax 生成商品
	 new smallFn().ajaxGoodList();
// 添加cookie
	/* new smallFn().addCookie();*/
// 跨域搜索栏
	 new smallFn().searchJsonp();


})