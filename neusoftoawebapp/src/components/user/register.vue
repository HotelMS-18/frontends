<template>
	<div id="main">
		<div class="main">
			<div class="container  ">
				<div class="c2">
					<p>注册界面</p>
				</div>
				<div class="c3">
					<form method="post" action="${pageContext.request.contextPath}/member/register">
						<div class="form-group">
							<label for="username">用户名</label>
							<input type="text" class="form-control" id="username" name="userName">
							<span class="pp hide">此项必须填写</span>
						</div>
						<div class="form-group">
							<label for="password">密码 </label>
							<input type="password" class="form-control" id="password" name="passWord">
							<span class="pp hide">此项必须填写</span>
						</div>
						<div class="form-group">
							<label for="repassword">再次输入密码 </label>
							<input type="password" class="form-control" id="repassword">
						</div>
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="text" class="form-control" id="email" name="email">
							<span class="pp hide">此项必须填写</span>
						</div>
						<div class="form-group">
							<label for="phonenum">手机号</label>
							<input type="text" class="form-control" id="phonenum" name="phonenum">
							<span class="pp hide">此项必须填写</span>
						</div>
						<div class="c3-1">
							<button type="submit" class="btn btn-default btn1">注册</button>
							<a href="${pageContext.request.contextPath}/pages/login.jsp" type="button" class="btn btn-default btn2">已经有账号了?请登录</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "UserRegister",
		data() {
			return {
				userid: "",
				password: "",
				email:"",
				phonenum:"",
			};
		},
		created() {
			this.$store.dispatch("logout")
		},
		methods: { //用户登录处理
			userRegister() {
				this.axiosJSON.get("/user/register" + this.username + "/" + this.password+"/"+this.email).then(result => {
					if (result.data.stringResult == "Y") {
						//存储登陆用户对象 到vuex的store中
						//this.$store.dispatch("loginUser", result.data.result);
						this.$router.push("/login");
					} else {
						this.userid = "";
						this.password = "";
						this.email="";
						this.phonenum="";
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
