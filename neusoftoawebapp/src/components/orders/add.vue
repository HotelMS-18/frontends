<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">增加订单</h3>
		</div>
		
	
	    <div class="box-body">
	    	<form method="post" v-on:submit.prevent="add()">
				<div class="form-group">
					<label for="exampleInputPassword1">入住时间</label>
					<input type="text" class="form-control" v-model="orders.comeTimeStr" required>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">退房时间</label>
					<input type="text" class="form-control" v-model="orders.departureTimeStr" required>
				</div>
				
				<div class="form-group">
					<label for="exampleInputPassword1">预订客人编号</label>
					<input type="text" class="form-control" v-model="orders.userId" required>
				</div>
				  <button type="submit" class="btn btn-primary">预订</button>
				  <router-link to="/orders/list" class="btn btn-default">取消</router-link>
				
			</form>
	    
	    </div>
	</div>
</template>

<script>
	import axios from "axios";
	axios.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded';
	export default {
		name:"OrdersAdd",
		data(){
			return {
				orders:{
					comeTimeStr:"",
					departureTimeStr:"",
					houseId:this.$route.params.hid,
					userId:0
				}
			};
		},
		
		methods:{
			add(){
				axios.post('http://localhost:8200/orders/addOrder',this.orders).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result.data.message);
						this.$router.push("/orders/list"); //编程方式跳转到部门列表组件
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
