var express=require("express");
var app=express();

app.use(express.static('./'));
app.use(express.static('public'));

app.set('view engine','html');

var video=[
	{id:"1",
		url:"./data/images/1.jpg",
		name:"later1",
		title:"hello word1",
		// videos:"./data/video/1.mp4",
		// words:["这个视频好牛逼啊1","23333333"]
	},
	{id:"2",
		url:"./data/images/2.jpg",
		name:"later2",
		title:"hello word2",
		// videos:"./data/video/2.mp4",
		// words:["这个视频好牛逼啊2"]
	},
	{id:"3",
		url:"./data/images/3.jpg",
		name:"later3",
		title:"hello word3",
		// videos:"./data/video/3.mp4",
		// words:["这个视频好牛逼啊3"]
	},
		{id:"4",
		url:"./data/images/4.jpg",
		name:"later4",title:"hello word4",
		// videos:"./data/video/1.mp4",
		// words:["这个视频好牛逼啊4"]
	},
	{id:"5",
		url:"./data/images/5.jpg",
		name:"later5",title:"hello word5",
		// videos:"./data/video/2.mp4",
		// words:["这个视频好牛逼啊5"]
	},
	{id:"6",
		url:"./data/images/6.jpg",
		name:"later6",title:"hello word6",
		// videos:"./data/video/3.mp4",
		// words:["这个视频好牛逼啊6"]
	},
]
var index=[
	{id:'1',
		url:"./data/images/index/timg.jpg",
		name:"later1",
		title:"hello index1",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊1","233333"]
	},
	{id:'2',
		url:"./data/images/index/timg (1).jpg",
		name:"later2",
		title:"hello index2",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊2"]
	},
	{id:'3',
		url:"./data/images/index/timg (2).jpg",
		name:"later3",
		title:"hello index3",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊3"]
	},
	{id:'4',
		url:"./data/images/index/timg (3).jpg",
		name:"later4",
		title:"hello index4",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊4"]
	},
	{id:'5',
		url:"./data/images/index/timg (4).jpg",
		name:"later5",
		title:"hello index5",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊5"]
	},
	{id:'6',
		url:"./data/images/index/timg (5).jpg",
		name:"later6",
		title:"hello index6",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊6"]
	},
	{id:'7',
		url:"./data/images/index/timg (6).jpg",
		name:"later7",
		title:"hello index7",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊7"]
	},
	{id:'8',
		url:"./data/images/index/timg (7).jpg",
		name:"later8",
		title:"hello index8",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊8"]
	},
	{id:'9',
		url:"./data/images/index/8.jpg",
		name:"later9",
		title:"hello index9",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊9"]
	},
	{id:'0',
		url:"./data/images/index/9.jpg",
		name:"later0",
		title:"hello index0",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊0"]
	},
	{id:'11',
		url:"./data/images/index/10.jpg",
		name:"later11",
		title:"hello index11",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊11"]
	},
	{id:'12',
		url:"./data/images/index/timg (11).jpg",
		name:"later12",
		title:"hello index12",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊12"]
	},
]
var Comic=[
	{id:'1',
		url:"./data/images/Comic/timg.jpg",
		name:"Comic1",
		title:"hello Comic1",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊1","233333"]
	},
	{id:'2',
		url:"./data/images/Comic/timg (1).jpg",
		name:"Comic2",
		title:"hello Comic2",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊2"]
	},
	{id:'3',
		url:"./data/images/Comic/timg (2).jpg",
		name:"Comic3",
		title:"hello Comic3",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊3"]
	},
	{id:'4',
		url:"./data/images/Comic/timg (3).jpg",
		name:"Comic4",
		title:"hello Comic4",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊4"]
	},
	{id:'5',
		url:"./data/images/Comic/timg (4).jpg",
		name:"Comic5",
		title:"hello Comic5",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊5"]
	},
	{id:'6',
		url:"./data/images/Comic/timg (5).jpg",
		name:"Comic6",
		title:"hello Comic6",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊6"]
	},
	{id:'7',
		url:"./data/images/Comic/timg (6).jpg",
		name:"Comic7",
		title:"hello Comic7",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊7"]
	},
	{id:'8',
		url:"./data/images/Comic/timg (7).jpg",
		name:"Comic8",
		title:"hello Comic8",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊8"]
	},
	{id:'9',
		url:"./data/images/Comic/timg (8).jpg",
		name:"Comic9",
		title:"hello Comic9",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊9"]
	},
	{id:'0',
		url:"./data/images/Comic/timg (9).jpg",
		name:"Comic0",
		title:"hello Comic0",
		videos:"./data/video/2.mp4",
		words:["这个视频好牛逼啊0"]
	},
	{id:'11',
		url:"./data/images/Comic/timg (10).jpg",
		name:"Comic11",
		title:"hello Comic11",
		videos:"./data/video/1.mp4",
		words:["这个视频好牛逼啊11"]
	},
	{id:'12',
		url:"./data/images/Comic/timg (11).jpg",
		name:"Comic12",
		title:"hello Comic12",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊12"]
	},
	{id:'13',
		url:"./data/images/Comic/timg (5).jpg",
		name:"Comic13",
		title:"hello Comic13",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊13"]
	},
	{id:'14',
		url:"./data/images/Comic/timg (7).jpg",
		name:"Comic14",
		title:"hello Comic14",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊14"]
	},
	{id:'15',
		url:"./data/images/Comic/timg (9).jpg",
		name:"Comic15",
		title:"hello Comic15",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊15"]
	},
	{id:'16',
		url:"./data/images/Comic/timg (11).jpg",
		name:"Comic16",
		title:"hello Comic16",
		videos:"./data/video/3.mp4",
		words:["这个视频好牛逼啊16"]
	}
]
app.get('/getpicb',function(req,res){
	res.send(video)
})
app.get('/getpica',function(req,res){
	res.send(index)
})
app.get('/getpicComic',function(req,res){
	res.send(Comic)
})
app.get('/getvideos',function(req,res){
	for(var i=0;i<index.length;i++){
		if(req.query.id===index[i].id){
			res.send(index[i])
		}else{
			console.log(req.query.id)
		}
	}
})

app.get('/user',function(req,res){
	res.render('/user')
})
app.get('/enroll',function(req,res){
	res.render('/enroll')
})
app.get("/index",function(req,res){
	res.render('/index')
})
app.listen(8080,function(){
	console.log("running")
})