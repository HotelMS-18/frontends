import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.config.errorHandler = function(err, vm, info){
  	console.log('Error:${err.toString()\nInfo:${info}}');
  }

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
