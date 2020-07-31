<template>
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">修改客房</h3>
	</div>
	<div class="box-body">
		<form method="post" v-on:submit.prevent="modify()" >
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
	//部门修改组件
	export default {
		name:"HouseModify",
		
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
		created(){ //组件的创建生命周期函数
			let houseHid=this.$route.params.hid;
			this.getHouse(houseHid);
			
		},
		methods:{
			getHouse(hid){	
				axios.get("http://localhost:8200/house/findById?hid="+hid).then(result=>{
					this.house=result.data;
				});
			},
			modify(){
				axios.post("http://localhost:8200/house/updateHouse",this.house).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result);
						this.$router.push("/house/list"); //编程方式跳转到部门列表组件
					//}
					//else{
						//alert(result.data.message);
					//}
				});
			},
			
		}
	}
</script>

<style>
</style>
