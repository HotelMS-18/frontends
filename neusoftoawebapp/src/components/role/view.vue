<template>
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label for="exampleInputEmail1">角色名称：</label>
					<span>{{role.roleName}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">角色职能：</label>
					<span>{{role.roleDesc}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">可添加的权限：</label>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th scope="col">编号</th>
								<th scope="col">权限名称</th>
								<th scope="col">操作</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="p in permissionList" v-bind:key="p.id">
								<td>{{p.id}}</td>
								<td>{{p.permissionName}}</td>

								<td>
									<!-- <router-link v-bind:to="'/house/modify/'+hs.hid" class="btn btn-default">修改</router-link> -->
									<a href="#" v-on:click="addPermission(p.id)" class="btn btn-danger">添加权限</a>
									<!-- <router-link v-bind:to="'/house/view/'+hs.hid" class="btn btn-default">查看</router-link> -->
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<router-link to="/role/list" class="btn btn-default">返回</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name: "RoleView",
		data() {
			return {
				role: {
					roleName: "",
					roleDesc: "",
				},
				permissionList: []
			};
		},
		created() { //当前组件的生命周期方法，组件创建后执行
			let rid = this.$route.params.rid;
			this.getRole(rid);
			this.getList(rid);
		},
		methods: {
			getRole(rid) {
				axios.get("http://localhost:8200/role/findById?id=" + rid).then(result => {
					this.role = result.data;
				});
			},
			getList(rid) {
				axios.get("http://localhost:8200/role/findRoleByIdAndAllPermission?id=" + rid).then(result => {
					this.permissionList = result.data;
					//console.log(result);
				});
			},

			addPermission(pid) {
				let checkresult = confirm("您确认要添加该权限吗？");
				let rid=this.$route.params.rid;
				if (checkresult) {
					axios.post("http://localhost:8200/role/addPermissionToRole?roleId="+rid+"&id="+pid ,{
						pid: pid
					}).then(result => {
						//alert(result.data.message);
						this.$router.push("/role/list")
						
					});
				}
			}
		}
	}
</script>

<style>
</style>
