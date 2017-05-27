<template>
	<div>
		<div class='header'>
			<div class="header-title">
				<div class="header-title-inner">
					<ul class="header-val">
						<li><a href="../public/user.html" class='b'>登陆</a></li>
						<li><a href="../public/user.html" class='b'>| 注册</a></li>
						<li><a href="" class='b'>上传</a></li>
					</ul>
				</div>
			</div>
			<div class="header-content">
				<img class="pic" src="../../data/images/logo.png" alt="">
				<span class="text">welcome to later</span>
				<div class="val">
						<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
							<el-menu-item index="1"><router-link class="a" v-bind:to="{path:'/'}">首页</router-link></el-menu-item>
							<el-menu-item index="2"><router-link class="a" v-bind:to="{path:'Comic'}">动漫</router-link></el-menu-item>
							<el-menu-item index="4"><router-link class="a" v-bind:to="{path:'movie'}">电影</router-link></el-menu-item>
							<el-menu-item index="5"><router-link class="a" v-bind:to="{path:'indexvideo'}">视频</router-link></el-menu-item>
							<el-menu-item index="6"><router-link class="a" v-bind:to="{path:'spoof'}">恶搞</router-link></el-menu-item>
							<el-menu-item index="7"><router-link class="a" v-bind:to="{path:'music'}">音乐</router-link></el-menu-item>
							<el-menu-item index="8"><router-link class="a" v-bind:to="{path:'game'}">游戏</router-link></el-menu-item>
							<el-menu-item index="9"><router-link class="a" v-bind:to="{path:'science'}">科技</router-link></el-menu-item>
							</el-menu>
					<div class="input">
						<el-input
						  	placeholder="君の名は"
						  	icon="search"
						  	v-model="input2"
						  	:on-icon-click="handleIconClick">
						</el-input>
					</div>
				</div>
			</div>
			<div class="right-val" id='right-val1'>
				<ul>
					<li><router-link v-bind:to="{path:'/'}" class="a">首页</router-link></li>
					<li><router-link v-bind:to="{path:'Comic'}" class="a">动漫</router-link></li>
					<li><router-link v-bind:to="{path:'Carousel'}" class="a">电影</router-link></li>
					<li><router-link v-bind:to="{path:'Carousel'}" class="a">视频</router-link></li>
					<li><router-link v-bind:to="{path:'Carousel'}" class="a">恶搞</router-link></li>
					<li><router-link v-bind:to="{path:'Carousel'}" class="a">音乐</router-link></li>
					<li><router-link v-bind:to="{path:'Carousel'}" class="a">游戏</router-link></li>
					<li><router-link v-bind:to="{path:'Carousel'}" class="a">科技</router-link></li>
				</ul>
			</div>
		</div>
		<div class='content'>
			<router-view></router-view>
		</div>
		<div class="footer">
			<ul>
				<li>关注我：<a href="">微信</a></li>
				<li class='me'><a href="http://13513477271.club" class="blog" target="_blank">博客</a></li>
				<li class="skill">技术支持：vue,elementUi等等</li>
			</ul>	
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data(){
		    return {
		    	input2: '',
		    	activeIndex: '1',
        		activeIndex2: '1'
		   	}
		},
		methods:{
		    handleIconClick(ev) {
		      	console.log(ev);
			},
			handleSelect(key, keyPath) {
	       		console.log(key, keyPath);
	    	}
	    }
	}
</script>
<style>
	.header{
		width:1680px;
		height:170px;
		background-image: url(../../data/images/bgi.png);
		margin:0 auto;
		position: relative;
		left: 50%;
		margin-left:-840px;
	}
	.header-title{
		height:35px;
		background-color: rgba(0, 0, 0, 0.5);
		position: relative;
		z-index:9999;
	}
	.header-title-inner{
		width:1680px;
		height:35px;
		margin:0 auto;
	}
	.header-val{
		margin-left:1200px;
	}
	.header-val .b{
		color:#fff;
		text-decoration: none;
		line-height:35px;
	}
	.header-content{
		width:1080px;
		height:170px;
		position: relative;
		left:50%;
		margin-left: -540px;
		text-align: center;
		clear:both;
	}
	.header-content .pic{
		width: 250px;
		height:80px;
		float: left;
		display: block;
	}
	.header-content .text{
		font-size: 40px;
		height: 80px;
		display:block;
		float: left;
		color:#fff;
		line-height:80px;
		margin-left: 120px;
	}
	.val{
		height:50px;
	}
	.val .el-menu{
		width:800px;
		height:55px;
	}
	.val li.el-menu-item{
		width:100px;
	}
	.val .input{
		float: right;
		line-height: 50px;
	}
	.val .input .el-input__inner{
		background-color: rgba(226, 225, 230, 1);
	}
	.input:hover .el-input__inner{
		background-color: #fff;
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
		background-color: #F6F9FA;
	}
	.clear{
		clear: both;
	}
	.content .videos{
		clear: both;
	}
	.right-val{
		position:relative;
		top:200px;
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