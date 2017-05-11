import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/app.vue'
import List from '../components/App-list.vue';
Vue.use(Router)


const VueRouter=new Router({
	routes:[
		{path:'/',components:App},
		{path:'/Listi',components:List},
	]
})
export default VueRouter