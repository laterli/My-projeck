<template>
	<div>
		<ul>
			<li class="titlist" v-for="cont in listb">
				<router-link class="a" to="/">{{cont}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return {
				listb:''
			}
		},
		mounted:function(){
			var vm=this;
			axios.get('/getlist').then(function(res){
				console.log(vm.listb)
				vm.listb=res.data
			})
		}
	}
</script>
<style scoped>
	ul{
		height:70px;
	}
	.titlist{
		list-style: none;
		float: left;
		width:80px;
		height:70px;
		text-align: center;
	}
	.titlist .a{
		text-decoration: none;
		display:block;
		line-height: 70px;
		color:#ff0;
		font-size: 20px;
	}
</style>