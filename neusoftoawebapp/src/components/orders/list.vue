<template>
	<div class="box">
	  <div class="box-header with-border">
	    <h3 class="box-title">订单管理</h3> 
	  </div>
	  <div class="box-body">
	        <table class="table table-bordered">
					 <thead>
					   <tr>
					     <th scope="col">编号</th>
					     <th scope="col">下单时间</th>
						 <th scope="col">订单价格</th>
					     <th scope="col">订单状态</th>
					     <th scope="col">入住时间</th>
						 <th scope="col">退房时间</th>
						 <th scope="col">房间号</th>
						 <th scope="col">客人姓名</th>
						 <th scope="col">操作</th>
					   </tr>
					 </thead>
					 <tbody>
					 <tr v-for="os in ordersList" v-bind:key="os.oid">
					   <td>{{os.oid}}</td>
					   <td>{{os.orderTime}}</td>
					   <td>{{os.orderPrice}}</td>
					   <td>{{os.orderStatus}}</td>
					   <td>{{os.comeTime}}</td>
					   <td>{{os.departureTime}}</td>
					   <td>{{os.houseNum}}</td>
					   <td>{{os.userName}}</td>
					   
					 	<td>
					 	  <router-link v-bind:to="'/orders/modify/'+os.oid" class="btn btn-default">修改</router-link>
					 	  <a href="#" v-on:click="deleteOrder(os.oid)" class="btn btn-danger">删除</a>
					 	  <router-link v-bind:to="'/orders/view/'+os.oid" class="btn btn-default">查看</router-link>
					 	</td>
					 </tr>
					 </tbody>
					</table>
	  </div>
	  <!-- /.box-body -->
	 
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"OrdersList",
		data(){
			return {
				ordersList:[]
			};
		},
		created(){//当前组件的生命周期方法，组件创建后执行
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/orders/findAll",{				
				}).then(result=>{
					console.log(result.data);
					this.ordersList=result.data;
					//console.log(result);
				});
				
			},
			deleteOrder(oid){
				let checkresult=confirm("您确认要删除此订单吗？");
				if(checkresult){
					    axios.post("http://localhost:8200/orders/deleteOrder",{oid:oid}).then(result=>{
						//alert(result.data.message);
						//if(result.data){
							this.getList();
						//}
					});
				}
			}
		},
	}
</script>

<style>
</style>
