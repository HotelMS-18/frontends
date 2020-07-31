<template>
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">修改订单</h3>
	</div>
	<div class="box-body">
		<form method="post" v-on:submit.prevent="modify()" >
		  <div class="form-group">
			<label for="exampleInputPassword1">入住时间</label>
			<input type="text" class="form-control" v-model="orders.comeTime" required>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">退房时间</label>
			<input type="text" class="form-control" v-model="orders.departureTime" required>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">房间编号</label>
			<input type="text" class="form-control" v-model="orders.houseId" required>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">入住客人编号</label>
			<input type="text" class="form-control" v-model="orders.userId" required>
		  </div>
		  <button type="submit" class="btn btn-primary">提交</button>
		  <router-link to="/orders/list" class="btn btn-default">取消</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
</template>

<script>
	import axios from "axios";
	//部门修改组件
	export default {
		name:"OrdersModify",
		
		data(){
			return {
				orders:{
					comeTime:"",
					departureTime:"",
					houseId:0,
					userId:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let ordersOid=this.$route.params.oid;
			this.getOrder(ordersOid);
			
		},
		methods:{
			getOrder(oid){	
				axios.get("http://localhost:8200/orders/findById?oid="+oid).then(result=>{
					this.orders=result.data;
				});
			},
			modify(){
				axios.post("http://localhost:8200/orders/updateOrder",this.order).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result);
						this.$router.push("/orders/list"); //编程方式跳转到部门列表组件
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
