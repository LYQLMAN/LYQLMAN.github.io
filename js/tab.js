

(function($){
	let setting={
		heard:['体育','娱乐','歌手'],
		content:['111','2222','333']
	}
	
	var $prent = null;
	function tab(obj={}){//整合对象
		setting = $.extend(setting,obj);
		$prent = this;
		ceraInput();
		ceraDiv();
		change();
	}
	

	//创建input
	function ceraInput(){
		for(var i=0; i<setting.heard.length;i++){
			if(i==0){
				var inp = $('<input type="button" class="active">');
			}else{
				var inp = $('<input type="button">')
			}
			inp.val(setting.heard[i]);
			$prent.append(inp);
		}
		
	}
	
	//创建div
	function ceraDiv(){
		for(var i=0;i<setting.content.length;i++){
			if(i==0){
				var div = $('<div class="show">')
				div.html(setting.content[i]);
			}else{
				var div = $('<div>')
				div.html(setting.content[i]);
			}	
			$prent.append(div);
		}
	}
	
	//点击事件
	function change(){
		var inp = $prent.find('input');
		var div = $prent.find('div');
		inp.on('click',function(){
			inp.removeClass('active');
			$(this).addClass('active');
			
			div.removeClass('show');
			div.eq($(this).index('input')).addClass('show')
		})
		
	}
	
	//把方法挂到组件下
	$.fn.extend({
//		tab:tab
		tab
	})
	
})(jQuery)
