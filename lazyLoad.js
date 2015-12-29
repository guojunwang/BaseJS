//调用方式，基于jquery extend 方法
 $.preloadimg(img, function(){
		$("img").each(function(index, element) {
			$(this).attr("src", $(this).data("src"));
		});
		$('#loading').delay(500).fadeOut(500,function(){
			$(this).remove();
		});
	});
	
$.extend({
	isWeiXin : function(){
		var ua = window.navigator.userAgent.toLowerCase(); 
		return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false;
	},
	preloadimg : function(arr, comp){
		var flag = true,
			n = 0;
		var loadImg = function(src){
			var img = new Image();
			img.onload = function(){
				n++;
				var t = Math.round(n/l*100);
				$('p span', '#loading').width(t+'%');
				$('strong', '#loading').text(t+'%');
				if(t >= 97 && flag){
					comp();
					flag = false;
				}
			}
			img.src = src;
		}
		if(typeof(arr) == "string"){
			var l = 1;
			var w = new loadImg(arr);
		}else{
			var l = arr.length;
			for(var i=0;i<l;i++){
				var w = new loadImg("image/" + arr[i]);
			}
		}
	}
});
	
	
