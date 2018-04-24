<!DOCTYPE html>
<html lang="en">
<head> 
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="style/login/config.css">
</head>
<body>
	<header class="header">
		<div class="header_top">
			<div class="margin">
				<div class="content_l">
					<a href=" "><img src="images/xing.jpg" alt=""></a>
					<a href=""><img src="images/weixin.jpg" alt="">
						<div class = "saoma_img"><img src="images/saoma.jpg" alt=""></div>
					</a>
					<a href=" "><img src="images/weibo.jpg" alt=""></a>
				</div>

				<div class="content_r">
					<span>您好，欢迎来到虹领巾！</span>
					<a href="">[登录]</a>
					<a href="">[注册]</a><span>|</span>
					<a href="">我的虹领巾</a><span>|</span>
					<a href="">我的订单</a><span>|</span>
					<div class="last">
						<a href="">客户服务</a>
						<div class="service">
							<a href="">大客户服务</a>
							<a href="">线上服务</a>
							<a href="">服务热线</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="logo margin">
			<a href=""><img src="images/logo.png" alt=""></a>
		</div>
	</header>
	<main class="main">
		<div class="main_login margin">
			<div class="main_loginImg">
				<img src="images/loginimg.gif" alt="">
			</div>
			<div class="login">
				<form class="input_top" method="POST" action="http://localhost/H5/th2016_1_2/php/loginYz.php">
					<div class="input_user">
						<span>用户名/邮箱/验证手机</span>
						<div class="userName">
							<input type="text" id="user" name="account" class="changeColor">
							<i class="iconfont icon-account"></i>
						</div>
<!-- 提示框显示 统一class名：disShow -->
<!-- 搜索框变色 统一class名：changeColor -->
						<span class="warnUser disShow">请输入用户名/邮箱/已验证手机/VIP卡</span>
					</div>
					<div class="input_pass">
						<span>密&nbsp;&nbsp;&nbsp;码</span>
						<div class="password">
							<input type="password" id="password" name="password" class="changeColor">
							<i class="iconfont icon-survey"></i>
						</div>
						<span class="warnPass disShow">请输入密码</span>
					</div>
					<div class="checked">
						<input type="checkbox" id="getCookie"><span>记住账号</span><a href="">忘记密码？</a>
					</div>
					<input type="submit" value="登 &nbsp;&nbsp;录" id="sub">
					<p class="other">
						<span>使用合作网站账号登录虹领巾：</span><br>
						<a href=""><img src="images/weibo.jpg" alt="">新浪微博&nbsp;&nbsp;</a><span>|</span>
						<a href=""><img src="images/weibo.jpg" alt="">QQ&nbsp;&nbsp;</a><span>|</span>
						<a href=""><img src="images/alipayicon.jpg" alt=""></a>
					</p>
				</form>
				<div class="input_bottom">
					<span>还没有虹领巾的账号？</span>
					<button><a href="">注册新账号</a></button>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="bottom margin">
			<div class="copy">
				<p>
					<a href="">粤ICP备11065574号-7</a>
					<span>营业执照</span>
					<span>Copyright© 虹领巾 2009-2018, All Rights Reserved</span>
					<span>天虹商场股份有限公司 版权所有</span>
				</p>
				<p>
					<a href=""><img src="images/wangan2.gif" alt=""></a>
					<a href=""><img src="images/govIcon.gif" alt=""></a>
					<a href=""><img src="images/kexin.gif" alt=""></a>
					<a href=""><img src="images/ylimg.gif" alt=""></a>
					<a href=""><img src="images/zhongxin.gif" alt=""></a>
				</p>
			</div>
		</div>
	</footer>
</body>
<!-- 	引入jQuery
<script src = libs/jquery-1.11.3.js></script>
使用requireJs模块化开发
<script src = libs/require.js></script>
引用jQuery cookie 插件
<script src = libs/jquery.cookie.js></script>
在config中配置各个Js文件
<script src = "module/login/config.js"></script> -->
<script>
	var oBtn = document.getElementById('sub');
	var oUser = document.getElementById('user');
	var oPass = document.getElementById('password');
		oBtn.onclick =function(){
			var oUserV = oUser.value;
			var oPassV = oPass.value;

		}
</script>
</html>