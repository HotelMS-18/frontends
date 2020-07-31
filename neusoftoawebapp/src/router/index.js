import Vue from 'vue'
import VueRouter from 'vue-router'
import HouseMain from "./../components/house/main.vue"
import HouseList from "./../components/house/list.vue"
import HouseAdd from "./../components/house/add.vue"
import HouseModify from "./../components/house/modify.vue"
import HouseView from "./../components/house/view.vue"
import HouseListN from "./../components/house/listn.vue"

import UserLogin from "./../components/user/login.vue"
import UserRegister from "./../components/user/register.vue"

import RoleMain from "./../components/role/main.vue"
import RoleList from "./../components/role/list.vue"
import RoleView from "./../components/role/view.vue"
import RoleAdd from "./../components/role/add.vue"


import OrdersMain from "./../components/orders/main.vue"
import OrdersList from "./../components/orders/list.vue"
import OrdersAdd from "./../components/orders/add.vue"
import OrdersModify from "./../components/orders/modify.vue"
import OrdersView from "./../components/orders/view.vue"

import HomeMain from "./../components/home/Home.vue"


Vue.use(VueRouter)

  const routes = [
	  {path:"/",name:"homemain",component:HomeMain},
	  {
	  		path: "/login",
	  		name: "login",
	  		component: UserLogin
	  	},
	  	{
	  		path: "/register",
	  		name: "register",
	  		component: UserRegister
	  	},

	  {path:"/house",name:"housemain",component:HouseMain,
	  children:[
		  {path:"list",name:"houselist",component:HouseList},
		  {path:"add",name:"houseadd",component:HouseAdd},
		  {path:"view/:hid",name:"houseview",component:HouseView},
		  {path:"modify/:hid",name:"housemodify",component:HouseModify},
		  {path:"listn",name:"houseListn",component:HouseListN},
		  {path:"",redirect:"list"}
	  ]},
	  {path:"/orders",name:"ordersmain",component:OrdersMain,
	  children:[
		  {path:"list",name:"orderslist",component:OrdersList},
		  {path:"add/:hid",name:"ordersadd",component:OrdersAdd},
		  {path:"modify/:oid",name:"ordersmodify",component:OrdersModify},
		  {path:"view/:oid",name:"ordersview",component:OrdersView},
		  {path:"",redirect:"list"}
	  ]},
	  {
	  		path: "/role",
	  		name: "rolemain",
	  		component: RoleMain,
	  		children: [{
	  				path: "list",
	  				name: "rolelist",
	  				component: RoleList
	  			},
	  			{
	  				path: "view/:rid",
	  				name: "roleview",
	  				component: RoleView
	  			},
	  			{
	  				path: "add",
	  				name: "roleadd",
	  				component: RoleAdd
	  			},
	  		]
	  	}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
