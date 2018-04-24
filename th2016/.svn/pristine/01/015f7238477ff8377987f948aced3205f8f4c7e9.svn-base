<meta charset="UTF-8">
<?php
	$mysqli = new mysqli('localhost', 'root', 'root','myctest');

	// 读取数据 myctest 里面的 user 的数据
	$sql = 'select * from user';
	$ret = $mysqli ->query($sql);
	$memb = array();
	while ($row = $ret->fetch_assoc()) {
		array_push($memb, $row);
	};
	$account   = @$_POST['account'];  // 获取页面发送的数据
	$password  = @$_POST['password'];

	foreach ($memb as $v) {
		if($v['name'] === $account && $v['password'] === $password){
			
			header("location:http://localhost/H5/th2016_1_2/index.php");
			break;

		}else{

			header("location:http://localhost/H5/th2016_1_2/login.php");
		};
		 print_r($v['password'].",");
	};

?>