import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';
import Carousel from '../components/index-Carousel.vue';
import Comic from "../components/Comic-Carousel.vue";
import Video from '../components/App-video.vue';
Vue.use(Router)

export default new Router({
	routes:[
		{path:'/',component:index},
		{path:'/Video',component:Video},
		{path:'/Carousel',component:Carousel},
		{path:'/Comic',component:Comic}
	]
})