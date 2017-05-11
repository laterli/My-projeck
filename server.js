var express=require("express");
var app=express();

app.use(express.static('./'));

var picb=[
			{url:"./data/images/1.jpg",name:"later"},
			{url:"./data/images/2.jpg",name:"laterli"},
			{url:"./data/images/3.jpg",name:"latername"},
			{url:"./data/images/4.jpg",name:"later"},
			{url:"./data/images/5.jpg",name:"laterli"},
			{url:"./data/images/6.jpg",name:"latername"},
		]
var pica=[
			{url:"./data/images/1.jpg",name:"later"},
			{url:"./data/images/2.jpg",name:"laterli"},
			{url:"./data/images/3.jpg",name:"latername"},
			{url:"./data/images/4.jpg",name:"later"},
			{url:"./data/images/5.jpg",name:"laterli"},
			{url:"./data/images/6.jpg",name:"latername"},
			{url:"./data/images/1.jpg",name:"later"},
			{url:"./data/images/2.jpg",name:"laterli"},
			{url:"./data/images/3.jpg",name:"latername"},
			{url:"./data/images/4.jpg",name:"later"},
			{url:"./data/images/5.jpg",name:"laterli"},
			{url:"./data/images/6.jpg",name:"latername"},
		]
var list=['首页','动漫','电影','视频','恶搞','音乐','游戏','科技']

app.get('/getpicb',function(req,res){
	res.send(picb)
})
app.get('/getlist',function(req,res){
	res.send(list)
})
app.get('/getpica',function(req,res){
	res.send(pica)
})
app.listen(8080,function(){
	console.log("running")
})