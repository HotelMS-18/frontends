<template>
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">增加客房</h3>
	</div>
	<div class="box-body">
		<form method="post" v-on:submit.prevent="add()" >
		  <div class="form-group">
			<label for="exampleInputEmail1">客房名称</label>
			<input type="text" class="form-control" v-model="house.houseName" required >
			
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">客房状态</label>
			<input type="text" class="form-control" v-model="house.houseState" required>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">客房价格</label>
			<input type="text" class="form-control" v-model="house.housePrice" required>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">客房房号</label>
			<input type="text" class="form-control" v-model="house.houseNum" required>
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
					houseName:"",
					houseState:"",
					housePrice:0,
					houseNum:0
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/house/addHouse",this.house).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result.data.message);
						this.$router.push("/house/list"); //编程方式跳转到部门列表组件
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
