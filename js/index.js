$(function(){
	var q2=$(".q2");
	var list=$(".list");

  for(var i=0;i<q2.length;i++){
  	q2[i].index=i;
  	q2[i].onmouseover=function(){
  		list[this.index].style.display="block"
  	}
  	q2[i].onmouseout=function(){
  		for(var j=0;j<list.length;j++){
  			list[j].style.display="none"
  		}
  	}
  }

  var images=$("a",$(".box")[0]);
	var lis=$("li",$(".window")[0]);
	var win=$(".window")[0];
    var btnL=$(".Left")[0];
    var btnR=$(".Right")[0];

    /*获取图片宽度*/
    var widths=parseInt(getStyle(win,"width"));
    /*初始化状态*/
    lis[0].style.background="red";
	for (var i = 0; i < images.length; i++) {
		if (i==0) {
			continue;
		}
		images[i].style.left=widths+"px";
	}
	var index=0;
	var next=0;
	var flag=true;
	var t=setInterval(moveR,2000);
	function moveL(){
		// 更新next
		next--;
		// 判断边界
		if (next<0) {
			next=images.length-1;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=-widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		// 更新index
		index=next;
	}
	function moveR(){
		// 更新next
		next++;
		// 判断边界
		if (next==images.length) {
			next=0;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});

		// 更新index
		index=next;
	}
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){ 
		t=setInterval(moveR,2000);
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			if (index==this.index) {return};//当连续点击当前图片的时候跳出来不执行任何事件
			if (this.index>index) {
                images[this.index].style.left=widths+"px";
		        animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}else if(this.index<index){
				images[this.index].style.left=-widths+"px";
		        animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}
		    
		    next=this.index;
		    index=this.index;   
	    }
	}
	btnR.onclick=function(){
		console.log(12)
		if (flag) {
			flag=false;
			moveR();
		};
				
	}
	btnL.onclick=function(){
		console.log(12)

		if (flag) {
			flag=false;
			moveL();
		};
				
	}
	btnR.onmouseover=function(){
		btnR.style.opacity="0.9"
	}
		btnL.onmouseover=function(){
		btnL.style.opacity="0.9"
	}
		btnR.onmouseout=function(){
		btnR.style.opacity="0.4"
	}
		btnL.onmouseout=function(){
		btnL.style.opacity="0.4"
	}

	var li1=$(".li1")[0];
	var denglu=$(".denglu")[0];
	var li11=$(".li11")[0];
	var ewm=$(".ewm")[0];
	li1.onmouseover=function(){
		denglu.style.display="block"
	}
		li1.onmouseout=function(){
		denglu.style.display="none"
	}
		li11.onmouseover=function(){
		ewm.style.display="block"
	}
		li11.onmouseout=function(){
		ewm.style.display="none"
	}


	// 节点轮播

			var wins=$(".bb");
		for(var i=0;i<wins.length;i++){
			nodelunbo(wins[i],1);
		}



		function nodelunbo(obj,num){

		var imgbox=$(".imgbox",obj)[0];
		var as=$("a",imgbox);
		var btnL=$(".btnL",obj)[0];
		var btnR=$(".btnR",obj)[0];
		var flag=true;

		var len=as.length;
		var widths=parseInt(getStyle(as[0],"width"));
	    imgbox.style.width=as*len+"px";

		var t=setInterval(moveL,1000);
		function moveL(){
			animate(imgbox,{left:-num*widths},function(){
				for(var i=0;i<num;i++){
				var first=firstChild(imgbox);
				imgbox.appendChild(first);
				imgbox.style.left=0;
				}
	
				flag=true;
			})
		}

		function moveR(){
			var last=lastChild(imgbox);
			var first=firstChild(imgbox);
			imgbox.insertBefore(last,first)
			imgbox.style.left=-num*widths+"px";
			for(var i=0;i<num;i++){
			animate(imgbox,{left:0},function(){flag=true})

			}

		}

		obj.onmouseover=function(){
			clearInterval(t);
		}
		obj.onmouseout=function(){
		 t=setInterval(moveL,1000);

		}
		btnL.onclick=function(){
			if(flag){
				flag=false;
				moveL();
			}
		

			
		}
			btnR.onclick=function(){
		      if(flag){
				flag=false;
				moveR();
			}
		}

	}


    var guding2=$(".guding2")[0];
    var guding3=$(".guding3")[0];
    var guding4=$(".guding4")[0];

    guding2.onmouseover=function(){
    	animate(guding2,{right:44})
    }
        guding2.onmouseout=function(){
    	animate(guding2,{right:-22})
    }
        guding3.onmouseover=function(){
    	animate(guding3,{right:44})
    }
        guding3.onmouseout=function(){
    	animate(guding3,{right:-22})
    }
        guding4.onmouseover=function(){
    	animate(guding4,{right:44})
    }
        guding4.onmouseout=function(){
    	animate(guding4,{right:-22})
    }






})