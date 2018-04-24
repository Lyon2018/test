<?php
	$account   = @$_POST['account'];
	$password  = @$_POST['password'];
	$cellphone = @$_POST['cellphone'];

	if($account ==='' || $password === ''){
		echo "请输入账户或密码";
		exit;
	}
	// 将数据写入得到数据库
	$mysqli = new mysqli("localhost", "root", "root","myctest");
	
	$sql = 'insert into user(name, password, cellphone, entrance) values("'.$account.'", "'.$password.'", "'.$cellphone.'", '.time().')';
	/*执行SQL语句*/
	$mysqli->query($sql);
	// 将页面重新定向到注册的页面
	
	header('location:http://localhost/H5/th2016_1_2/login.php');

?>