<template>
	<div>
		<div class="title">
			<h3>标题：</h3>
			<span class="titlecon">{{info.title}}</span>
		</div>
		<div class="infoname">
			<h3>作者：</h3>
			<span class="infonamecon">{{info.name}}</span>
		</div>
		<div style="width:1080px;height:520px; clear:both;">
			<div class="video-player">
				<video class="video" v-on:click='Video' v-bind:src="info.videos" width="720" height="520" controls="controls"></video>
				<!-- <progress-bar class="video-progress"></progress-bar> -->
			</div>
			<div class="upwords">
				<h3>评论列表</h3>
				<span v-for="somewords in info.words" class="upwordsinner">&nbsp;&nbsp;&nbsp;&nbsp;{{somewords}}</span>
			</div>
		</div>
		<div class="userText">
			<textarea name="a" placeholder="元芳，对这个视频你怎么看" v-model="text">{{text}}</textarea>
			<el-button type="success" class="comment" v-on:click='btn'>提交评论</el-button>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import progressBar from "./App-video-progressBar.vue";
	export default{
		data(){
			return {
				info:'',
				text:''
			}
		},
		mounted(){
			var temp=this;
			axios.get("/getvideos",{params:temp.$route.query}).then(function(res){
				temp.info=res.data
				console.log(res.data)
			})
		},
		methods:{
			btn(){
				this.text='';
			},
			Video(){
				var Video=document.querySelector(".video")
				if(Video.paused){
					Video.play()
				}else{
					Video.pause()
				}
			}
		},
		components:{
			progressBar
		}
	}
</script>
<style scoped>
	.title{
		width: 300px;
		height: 100px;
		float: left;
	}
	.title h3{
		color:#00f;
		display: inline-block;
	}
	.titlecon{
		font-size: 30px;
	}
	.infoname{
		width:300px;
		height: 100px;
		margin-left:440px;
		float: left;
	}
	.infoname h3{
		color:#00f;
		display: inline-block;
	}
	.video-player{
		width:720px;
		height:540px;
		background-color: #000;
		float: left;
	}
	.video{
		background-color: #000;
		margin-top:20px;
	}
	.upwords{
		width:300px;
		height:540px;
		margin-left:20px;
		float: left;
		border:1px solid #000;
		border-radius: 5px;
	}
	.upwords h3{
		color:#00f;
		margin:0 auto;
		text-align: center;
	}
	.upwordsinner{
		display: block;
	}
	.userText{
		margin-top:50px;
		width:720px;
		height:100px;
	}
	.userText textarea{
		width:720px;
		height:65px;
		background-color: #f4f5f7;
	}
</style>