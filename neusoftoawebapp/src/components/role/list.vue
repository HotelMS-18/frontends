<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">角色管理</h3> 
	        </div>
	        <div class="box-body">
		          <table class="table table-bordered">
				 <thead>
				   <tr>
				     <th scope="col">编号</th>
				     <th scope="col">角色名</th>
				     <th scope="col">角色职能</th>
					 <th scope="col">操作</th>
				   </tr>
				 </thead>
				 <tbody>
				 <tr v-for="role in roleList" v-bind:key="role.id">
				   <td>{{role.id}}</td>
				   <td>{{role.roleName}}</td>
				   <td>{{role.roleDesc}}</td>
				   <td>
				 	  <!-- <router-link v-bind:to="'/role/modify/'+role.hid" class="btn btn-default">修改</router-link> -->
				 	  <!-- <a href="#" v-on:click="deleterole()" class="btn btn-danger">删除</a> -->
				 	  <router-link v-bind:to="'/role/view/'+role.id" class="btn btn-default">查看</router-link>
				 	</td> 
				 </tr>
				 </tbody>
				</table>
	        </div>
	        <!-- /.box-body -->
	        <router-link to="/role/add" class="btn btn-info">增加角色</router-link> 
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"RoleList",
		data(){
			return {
				roleList:[]
			};
		},
		created(){//当前组件的生命周期方法，组件创建后执行
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/role/findAll",{				
				}).then(result=>{
					this.roleList=result.data;
					//console.log(result);
				});
			},
/* 			deleteHouse(hid){
				let checkresult=confirm("您确认要删除此客房么及其有关的订单吗？");
				if(checkresult){
					    axios.post("http://localhost:8200/house/deleteHouse",{hid:hid}).then(result=>{
						//alert(result.data.message);
						if(result.data){
							this.getList();
						}
					});
				}
			} */
		}
	}
</script>

<style>
</style>
