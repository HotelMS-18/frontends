<template>
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看</h3>
	</div>
	<div class="box-body">
		<form  method="post" >
		  <div class="form-group">
			<label for="exampleInputEmail1">预定时间：</label>
			<span>{{orders.orderTime}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">消费总价：</label>
			<span>{{orders.orderPrice}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">订单状态：</label>
			<span>{{orders.orderStatus}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">入住时间：</label>
			<span>{{orders.comeTime}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">退房时间：</label>
			<span>{{orders.departureTime}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">预约客房房号：</label>
			<span>{{orders.houseId}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputEmail1">预约客人姓名：</label>
			<span>{{orders.userName}}</span>
		  </div>
		   <a href="#" v-on:click="dealOrders(oid)" class="btn btn-info">处理</a>
		   <a href="#" v-on:click="cancelOrders(oid)" class="btn btn-danger">取消</a>
		  <router-link to="/orders/list" class="btn btn-default">返回</router-link>
		</form>
	
	</div>
	<!-- /.box-body -->
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:"OrdersView",
		data(){
			return {
				orders:{
					orderTime:null,
					orderPrice:0,
					orderStatus:"",
					comeTime:null,
					departureTime:null,
					houseNum:0,
					userName:""
				},
				dis:true
			};
		},
		created(){ //组件的创建生命周期函数
			let ordersOid=this.$route.params.oid;
			this.getOrders(ordersOid);
		},
		methods:{
			getOrders(oid){
				axios.get("http://localhost:8200/orders/findById?oid="+oid).then(result=>{
					this.orders=result.data;
				});
				
			},
			dealOrders(oid){
				axios.post("http://localhost:8200/orders/updateToReservedById?oid="+this.orders.oid).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result);
						this.$router.push("/orders/list"); //编程方式跳转到部门列表组件
					//}
					//else{
						//alert(result.data.message);
					//}
				});
			},
			cancelOrders(oid){
				axios.post("http://localhost:8200/orders/updateToCancelById?oid="+this.orders.oid).then(result=>{
					//if(result.data.status=="OK"){
						//alert(result);
						this.$router.push("/orders/list"); //编程方式跳转到部门列表组件
					//}
					//else{
						//alert(result.data.message);
					//}
				});
			}
		}
	}
</script>

<style>
</style>
