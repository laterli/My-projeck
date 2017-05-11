<template>
	<div>
		<ul>
			<li class="lvideo" v-for='pivi in pica'>
				<router-link v-bind:to="{path:'videos'}">
					<img class="pic2" v-bind:src="pivi.url">
				</router-link>
				<span>{{pivi.name}}</span>
			</li>
			<router-view></router-view>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data(){
			return{
				pica:''
			}
		},
		mounted(){
			var vm=this
			axios.get("/getpica").then(function(res){
				vm.pica=res.data
			})
		}
	}
</script>
<style scoped>
	.pic2{
		display: block;
		width: 240px;
		height:140px;
	}
	.lvideo span{
		display: block;
		margin-left:100px;
	}
	.lvideo{
		width: 260px;
		height:160px;
		float: left;
		margin-bottom: 20px;
		margin-top: 20px;
		list-style: none;
	}
</style>