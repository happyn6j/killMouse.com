window.onload=function(){	
	game.init();
}
function click_box(_this){
	var _id=_this.id;
	var class_name=_this.className;
	// alert(class_name);
	if(class_name=='diglett_up'){
		base._get(_id).setAttribute("class","diglett_down");
	}
}
var game={
	column:5,
	row:5,
	box_width:60,
	box_height:60,

	init:function(){
		this.draw();//生成画布
		this.draw_diglett();//生成地鼠
	},
	// 绘制背景
	draw:function(){
		for(var x=0;x<this.column;x++){
			for(var y=0;y<this.row;y++){
				//var div=document.createElement("div");
				var div=base._creat("div");
				div.setAttribute("class","box");
				div.setAttribute("id",y*this.column+x);
				div.setAttribute("onclick","click_box(this)");
				div.setAttribute("style","width:"+this.box_width+"px;height:"+this.box_height+"px;top:"+(this.box_height*y)+"px;left:"+(this.box_width*x)+"px;");
				div.innerHTML=y*this.column+x;
				//document.getElementById("game_panel").appendChild(div);
				base._get("game_panel").appendChild(div);
			}
		}
	},
	// 清除地鼠
	clear_diglett:function(){
		for(var x=0;x<this.column;x++){
			for(var y=0;y<this.row;y++){
				var index=y*this.column+x;
				base._get(index).setAttribute("class","box");
			}
		}
	},
	// 绘制地鼠
	draw_diglett:function(){
		this.clear_diglett();
		var diglett_num=Math.floor(Math.random()*3+1);//随机生成1-3只地鼠
		for(var i=0;i<diglett_num;i++){
			var diglett_x=Math.floor(Math.random()*this.column);
			var diglett_y=Math.floor(Math.random()*this.row);
			var index=diglett_y*this.column+diglett_x;
			base._get(index).setAttribute("class","diglett_up");
		}
		setTimeout(function(){
			game.draw_diglett();
		},3000);

	}


}

var base={
	_get:function(_id){
		return document.getElementById(_id);
	},
	_creat:function(_element){
		return document.createElement(_element);
	}
}