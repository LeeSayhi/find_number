$(document).ready(function() {
	$(".guess_box").click( checkForCode );            
		function getRandom(num){                            
		var my_num = Math.floor(Math.random()*num);    
		return my_num;                                
	}
	
	//  生产随机数随机隐藏到某个方框中
	var hideCode = function(){              
	  var numRand = getRandom(4);              
	  $(".guess_box").each(function(index, value) {                         
		 if(numRand == index){            
			$(this).append("<span id='has_discount'></span>");                   
			return false;              
		 } 
	  });
	}

	// 调用隐藏数字变量的命名函数
	hideCode();    
	
	// 用来显示数字，并根据用户的选择做出不同的反应
	function checkForCode(){    
		var discount;     
		// 查看用户是否找到数字
	 	if($.contains(this, document.getElementById("has_discount") ) )     
		{                                                                
			var my_num = getRandom(100);    
			discount = "<hr>恭喜您，接下来"+my_num +"天都会持续好运哦，抓紧时间去表白吧!";                 
		}else{                                                              
			discount = "<hr>抱歉，继续加油找! （正确的是绿色边框里面的!）" ;                
		}

		$(".guess_box").each(function() {        
			// 查看这个方框是否包含数字      
			if($.contains(this, document.getElementById("has_discount") ) )    
			{
				$(this).addClass("discount");                                  
			}else{
				$(this).addClass("no_discount");                               
			}
			$(this).unbind();                                                
		});
		$("#result").append(discount);                                     
	}                                                                       
	
	// 增加hover事件
	$(".guess_box").hover(                                                 
	  function () {
	 	$(this).addClass("my_hover");                                     
	   },
	   function () {
		  $(this).removeClass("my_hover");                             
	   });  
});
