import Vue from 'vue';
import App from './components/app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import store from './store/index.js';
import router from './router/index.js';

Vue.use(ElementUI)
new Vue({
	el:'#app',
	components:{App},
	store:store,
	router:router
})