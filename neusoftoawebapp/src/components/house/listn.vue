<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">非空房管理</h3> 
	        </div>
	        <div class="box-body">
		          <table class="table table-bordered">
				 <thead>
				   <tr>
				     <th scope="col">编号</th>
				     <th scope="col">房间名</th>
				     <th scope="col">房间状态</th>
				     <th scope="col">房间价格</th>
					 <th scope="col">房间号</th>
					
					 <th scope="col">操作</th>
				   </tr>
				 </thead>
				 <tbody>
				 <tr v-for="hs in houseList" v-bind:key="hs.hid">
				   <td>{{hs.hid}}</td>
				   <td>{{hs.houseName}}</td>
				   <td>{{hs.houseState}}</td>
				   <td>{{hs.housePrice}}</td>
				   <td>{{hs.houseNum}}</td>
				   
				 	<td>
				 	  <router-link v-bind:to="'/house/modify/'+hs.hid" class="btn btn-default">修改</router-link>
				 	  <a href="#" v-on:click="deleteHouse(hs.hid)" class="btn btn-danger">删除</a>
				 	  <router-link v-bind:to="'/house/view/'+hs.hid" class="btn btn-default">查看</router-link>
				 	</td>
				 </tr>
				 </tbody>
				</table>
	        </div>
	        <!-- /.box-body -->
	        <router-link to="/house/add" class="btn btn-info">增加客房</router-link>  
			 <router-link to="/house/list" class="btn btn-default">空房管理</router-link>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"HouseListN",
		data(){
			return {
				houseList:[]
			};
		},
		created(){//当前组件的生命周期方法，组件创建后执行
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/house/findNotVacant",{				
				}).then(result=>{
					this.houseList=result.data;
					//console.log(result);
				});
			},
			deleteHouse(hid){
				let checkresult=confirm("您确认要删除此客房么及其有关的订单吗？");
				if(checkresult){
					    axios.post("http://localhost:8200/house/deleteHouse",{hid:hid}).then(result=>{
						//alert(result.data.message);
						this.getList();
					});
				}
			}
		}
	}
</script>

<style>
</style>
