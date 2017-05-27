<template>
	<div>
		<div class="car">
		    <el-carousel trigger="click" height="300px">
		      	<el-carousel-item v-for="item in picc" :key="item">
		        	<h3><img class="piccar" v-bind:src="item.url"></h3>
		     	 </el-carousel-item>
		    </el-carousel>
	  	</div>
	  	<ul>
			<li class="lvideo" v-for='pici in pica'>
				<router-link v-bind:to="{path:'Video',query:{id:pici.id}}">
					<img class="pic2" v-bind:src="pici.url">
				</router-link>
				<span>{{pici.name}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return {
				picc:'',
				pica:''
			}
		},
		mounted(){
			var vm=this;
			axios.get('/getpicb').then(function(res){
				vm.picc=res.data
			})
			axios.get('/getpica').then(function(res){
				vm.pica=res.data
			})
		}
	}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .car{
		width:520px;
		height: 320px;
		float: left;
		margin-bottom: 20px;
		margin-top:20px;
	}
	.piccar{
		width: 500px;
		height: 300px;
	}
  .el-carousel__item h3 {
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }
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