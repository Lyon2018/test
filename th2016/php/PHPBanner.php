 <?php
	 $jsonB = '[
	 {
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201705/891a3fbc-2cc0-43d8-9dd0-7a0120caf610.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/737e8122-edf7-41a4-b3c4-208422ca4417.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/a649885b-9a45-4093-98b0-967aad9e9a61.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/79354c5e-ae07-45df-8dca-c9b49fea45e7.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/d77783b6-ca9a-436c-92e5-1eb2b83075fe.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/1ca58c51-39cc-4db1-a24a-ac5c74531af4.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/5f079f57-4e98-470c-b5ba-3cccf20ad933.jpg"
	 },{
	 	"src":"http://img1.tianhong.cn/upload/mimage/ad/201801/b15ad324-5d09-4093-971f-111ceca262a7.jpg"
	 }
	 ]';

	$goodList = '[
		{
		"id":"000",
		"src":"http://img1.tianhong.cn/upload/pd/m/5023/20172/bd5435e5d8fb49e6a0a6a2f59cc948f6_800x800.jpg",
		"name":"Asian Choice虾馄饨泰国原装进口150g/碗",
		"newPri":"￥314.00",
		"oldPri":"￥23.00"
	},{
		"id":"001",
		"src":"http://img1.tianhong.cn/upload/pd/m/5024/20176/12ba6d27fb8d43e8aae63a4a59e89f5b_800x800.jpg",
		"name":"【鲜动生活】香辣小龙虾5-7钱/只 ",
		"newPri":"￥364.00",
		"oldPri":"￥23.00"
	},{
		"id":"002",
		"src":"http://img1.tianhong.cn/upload/pd/m/5024/20176/e21c38dc22b345cda5a46be3c2a0d5d1_800x800.jpg",
		"name":"北洋海产 野生熟冻北极贝 加拿大原装进口 ",
		"newPri":"￥34.00",
		"oldPri":"￥23.00"
	},{
		"id":"003",
		"src":"http://img1.tianhong.cn/upload/pd/m/yyml_spsx_4938/201710/a02536dee9dd4bfdab26804bdcad81ce_800x800.png",
		"name":"【鲜动生活】无添加川菜酸菜鱼麻辣水煮鱼共",
		"newPri":"￥304.00",
		"oldPri":"￥23.00"
	},{
		"id":"004",
		"src":"http://img1.tianhong.cn/upload/pd/m/5023/20176/3cbbbf2be8df42408ba89cbe30ed504a_800x800.jpg",
		"name":"花果山 越南进口青皮芒果5斤装 青皮就能吃",
		"newPri":"￥134.00",
		"oldPri":"￥23.00"
	},{
		"id":"005",
		"src":"http://img1.tianhong.cn/upload/pd/m/5022/201712/f45035474e214398890b65d8ec581f8c_800x800.png",
		"name":"Asian Choice虾馄饨泰国原装进口150g/碗",
		"newPri":"￥54.00",
		"oldPri":"￥23.00"
	}
	]';
	if(@$_REQUEST["banner"] == "img"){
		echo $jsonB;
	};
	if(@$_REQUEST["goodsList"] == "goodDetails"){
		echo $goodList;
	};
 ?>