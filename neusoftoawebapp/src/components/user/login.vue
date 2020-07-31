<template>
	<div class="login-box">
		<div class="login-logo">
			<a href="../../index2.html"><b>酒店管理系统</b></a>
		</div>
		<!-- /.login-logo -->
		<div class="login-box-body">
			<p class="login-box-msg">请输入登录信息</p>

			<form method="post" v-on:submit.prevent="userlogin()">
				<div class="form-group has-feedback">
					<input type="text" class="form-control" required v-model="userid" placeholder="账号">
					<span class="glyphicon glyphicon-envelope form-control-feedback"></span>
				</div>
				<div class="form-group has-feedback">
					<input type="password" v-model="password" required class="form-control" placeholder="密码">
					<span class="glyphicon glyphicon-lock form-control-feedback"></span>
				</div>
				<div class="row">
					<!-- /.col -->
					<div class="col-xs-12">
						<button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
					</div>
					<!-- /.col -->
				</div>
			</form>
			<!-- /.social-auth-links -->
			<a href="#" class="btn btn-info">忘记密码</a>
			<a href="register.html" class="btn btn-info text-center">注册新用户</a>
		</div>
		<!-- /.login-box-body -->
	</div>
</template>

<script>
	//import axios from "axios";
	export default {
		name: "UserLogin",
		data() {
			return {
				userid: "",
				password: "",
				user:{}
			};
		},
		created() {
			//this.$store.dispatch("logout");
			//调用后台REST API logout，清除Session中的存储登录信息。
		},
		methods: {
			userlogin() { //用户登录处理
				this.axiosJSON.get("/user/login/" + this.userid + "/" + this.password).then(result => {
					if (result.data.stringResult == "Y") {
						//存储登陆用户对象 到vuex的store中
						this.$store.dispatch("loginuser", result.data.result);
						this.$router.push("/");
					} else {
						this.userid = "";
						this.password = "";
						alert(result.data.message);
					}
				});
			}
		},
	}
</script>

<style>
</style>
