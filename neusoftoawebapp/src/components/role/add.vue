<template>
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">增加角色</h3>
	</div>
	<div class="box-body">
		<form method="post" v-on:submit.prevent="add()" >
		  <div class="form-group">
			<label for="exampleInputEmail1">角色名称</label>
			<input type="text" class="form-control" v-model="house.houseName" required >
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">角色职能</label>
			<input type="text" class="form-control" v-model="house.houseState" required>
		  </div>
		  <button type="submit" class="btn btn-primary">提交</button>
		  <router-link to="/house/list" class="btn btn-default">取消</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	axios.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded';
	export default {
		name:"HouseAdd",
		data(){
			return {
				house:{
					roleName:"",
					roleDesc:"",
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/role/save",this.role).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result.data.message);
						this.$router.push("/role/list"); //编程方式跳转到部门列表组件
					//}
					//else{
					//	alert(result.data.message);
					//}
				});
			}
		}
	}
</script>

<style>
</style>
