<template>
	<div>
		<div class="progress">
			<i v-on:click='control' v-bind:class="{stopstyle}"></i>
		</div>
	</div>
</template>
<script>
	export default{
		date(){
			return {
				stopstyle:"iconfont icon-bofang3"
			}
		},
		methods:{
			control(){
				this.stopstyle="iconfont icon-tag35"
			}
		}
	}
</script>
<style>
	.progress{
		width:720px;
		height:40px;
		background-color: #fff;
		border:1px solid #ccc;
	}
	.iconfont{
		font-size: 29px;
		line-height: 40px;
	}
</style>