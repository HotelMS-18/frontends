<template>
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">客房名称：</label>
			<span>{{house.houseName}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">客房状态：</label>
			<span>{{house.houseState}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">客房价格：</label>
			<span>{{house.housePrice}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">客房号：</label>
			<span>{{house.houseNum}}</span>
		  </div>
		  <router-link v-bind:to="'../../orders/add/'+house.hid" class="btn btn-info">预订</router-link>
		  <router-link to="/house/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name:"HouseView",
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
			}
		}
	}
</script>

<style>
</style>
