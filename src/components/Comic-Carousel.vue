<template>
	<div>
		<ul>
			<li class="Comic-li" v-for='pici in pica'>
				<router-link class="Comic-li-a" v-bind:to="{path:'Video',query:{id:pici.id}}">
					<img class="Comic-li-img" v-bind:src="pici.url">
				</router-link>
				<span class="Comic-li-span">{{pici.name}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return {
				pica:''
			}
		},
		mounted(){
			var vm=this;
			axios.get('/getpicComic').then(function(res){
				vm.pica=res.data
			})
		}
	}
</script>
<style>
 	.Comic-li-img{
		display: block;
		width: 240px;
		height:140px;
	}
	.Comic-li span{
		display: block;
		margin-left:100px;
	}
	.Comic-li{
		width: 260px;
		height:160px;
		float: left;
		margin-bottom: 20px;
		margin-top: 20px;
		list-style: none;
	}
</style>