<template>
	<div>
		<div class='header'>
			<div class="header-content">
				<img class="pic" src="../../data/images/logo.png" alt="">
				<span class="text">welcome to later</span>
				<ul class="header-val">
					<li><router-link to='user' class='a'>注册</router-link></li>
					<li><router-link to='house' class='a'>收藏</router-link></li>
					<li><router-link to='contribute' class='a'>投稿</router-link></li>
				</ul>
				<div class="val">
					<Listi></Listi>
				</div>
				<router-view></router-view>
			</div>
			<div class="right-val" id='right-val1'>
				<ul>
					<li v-for='li in lista'><router-link to='VideoImg' class="a">{{li}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class='content'>
			<Carousel></Carousel>
			<VideoImg></VideoImg>
		</div>
		<div class="footer">
			<ul>
				<li>关注我：<a href="">微信</a></li>
				<li class='me'><a href="http://13513477271.club" class="blog">博客</a></li>
				<li class="skill">技术支持：vue,jquery,element等等</li>
			</ul>	
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import VideoImg from './App-VideoImg.vue';
	import Listi from './App-list.vue';
	import Carousel from './App-Carousel figure.vue';
	export default{
		components:{
			VideoImg,
			Listi,
			Carousel
		},
		data(){
			return {
				lista:''
			}
		},
		mounted(){
			var vm=this;
			axios.get("/getlist").then(function(res){
				vm.lista=res.data
			})
		}
	}
</script>
<style scoped>
	.header{
		width:1680px;
		height:170px;
		background-image: url(../../data/images/bgi.png);
		margin:0 auto;
		position: relative;
		left: 50%;
		margin-left:-840px;
	}
	.header-content{
		width:1080px;
		height:170px;
		position: absolute;
		left:50%;
		margin-left: -540px;
		text-align: center;
		clear:both;
	}
	.header-content .pic{
		width: 300px;
		height:100px;
		float: left;
		display: block;
	}
	.header-content .text{
		font-size: 40px;
		height: 90px;
		display:block;
		float: left;
		line-height:90px;
		margin-left: 100px;
	}
	.header-val{
		float: right;
	}
	.header-val li{
		float: left;
		list-style: none;
		margin-left: 10px;
	}
	.header-val .a{
		font-size: 20px;
		text-decoration: none;
		color:#000;
	}
	.content{
		width: 1080px;
		height: 800px;
		margin:0 auto;
		clear:both;
		overflow: hidden;
	}
	.clear{
		clear: both;
	}
	.content .videos{
		clear: both;

	}
	.right-val{
		position:relative;
		top:300px;
		left:1380px;
		border:1px solid #ccc;
		width:35px;
		height:350px;
		border-radius: 5px;
		background-color: #ccc;
	}
	.right-val ul li{
		list-style: none;
		margin-top:20px;
		text-align: center;
	}
	.right-val ul li .a{
		text-decoration: none;
		color:#000;
		font-size: 11px;
	}
	@media screen and (max-width:1200px){
	    #right-val1{
	        position: fixed;
	      	left:auto;
	      	right:0;
	    }
	}
	.val{
		clear: both;
	}
	.val ul{
		float: left;
		height:80px;
	}
	.val ul li{
		display: block;
		float:left;
		width:133px;
		height:80px;
		text-align:center;
		line-height: 80px;
	}
	.val ul li .a{
		font-size: 30px;
		color:#fff;
		text-decoration: none;
	}
	.footer{
		width:1050px;
		height:170px;
		margin:0 auto;
		margin-top:50px;
	}
	.footer ul{
		text-align:center;
	}
	.footer ul li{
		display: block;
	}
	.footer a{
		text-decoration:none;
		color:#000;
	}
	.footer .me .blog{
		display: block;
		text-decoration: none;
		margin-left:63px;
	}
	.footer .skill{
		margin-top: 20px;
	}
</style>