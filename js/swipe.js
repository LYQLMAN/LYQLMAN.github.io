function swipe(obj,dir,fn){//对象，方向，执行的函数
	obj.addEventListener('touchstart',start);
	obj.addEventListener('touchend',end);
	
	var startX = null;
	var startY = null;
	var endX = null;
	var endY = null;
	
	function start(ev){
		ev = ev.changedTouches[0];//获取pageX，pageY
		startX = ev.pageX;
		startY = ev.pageY;
	}
	
	function end(ev){
		ev = ev.changedTouches[0];
		endX = ev.pageX;
		endY = ev.pageY;
		
		if(Math.abs(endX-startX)>=Math.abs(endY-startY)){//左右滑动
			if(endX-startX>0){
				if(dir=='right'){//判断方向
					typeof fn == 'function' &&fn();//判断传进来的是否是函数
				}
			}
			if(endX-startX<0){
				if(dir=='left'){
					typeof fn == 'function' &&fn();
				}
			}
		}
		
		if(Math.abs(endY-startY)>Math.abs(endX-startX)){//上下滑动
			if(endY-startY>0){
				if(dir=='down'){
					typeof fn == 'function' &&fn();
				}
			}
			if(endY - startY<0){
				if(dir=='up'){
					typeof fn == 'function' &&fn();
				}
			}
		}
		
		if(endX == startX&&endY==startY){//点击事件
			if(dir == 'tap'){
				typeof fn == 'function'&&fn();
			}
		}
	}
}
