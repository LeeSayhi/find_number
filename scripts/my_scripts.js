$(document).ready(function() {

	$(".guess_box").click( checkForCode );            //单击guess_box类时调用checkForCode函数
	
	function getRandom(num){                            //随机数生成函数
		var my_num = Math.floor(Math.random()*num);    //声明变量my_num,并赋值0-num之间的随机整数
		return my_num;                                //返回随机数
	}
	
	var hideCode = function(){              //命名函数（折扣每次会隐藏在不同的方框里）
	  var numRand = getRandom(4);          //调用随机函数getRandom         
	  $(".guess_box").each(function(index, value) {                         //遍历各个guess_box类
		 if(numRand == index){            //将当前的列表位置与随机数比较
			$(this).append("<span id='has_discount'></span>");             //将ID为has_discount的span元素增加到.guess_box类中      
			return false;               //跳出.each()循环
		 } 
	  });
	}
	
	hideCode();    //调用隐藏折扣变量的命名函数hideCode
	
	function checkForCode(){    //用来显示折扣码的函数
		var discount;     //声明discount变量
	 	if($.contains(this, document.getElementById("has_discount") ) )     //条件逻辑，查看用户是否找到折扣码（查找
		{                                                                  // 一个ID为has_discount的DOM元素是否在当前元素里)
			var my_num = getRandom(100);    //调用随机函数getRandom
			discount = "<p>Your Code: CODE"+my_num +"</p>";                 // 设置消息，
		}else{                                                              // 根据用户是否找到折扣码
			discount = "<hr>Sorry, no discount this time!" ;                // 消息会有所不同
		}

		$(".guess_box").each(function() {               //遍历各个guess_box类
			if($.contains(this, document.getElementById("has_discount") ) )     //查看这个方框是否包含折扣码
			{
				$(this).addClass("discount");                                  //如果找到，改变方框外观，并告诉用户折扣码是...
			}else{
				$(this).addClass("no_discount");                               //如果没找到，直接提示给用户
			}
			$(this).unbind();                                                 //解除监听事件
		});
		$("#result").append(discount);                                      //把输出的消息写到页面上单独区域中
	}                                                                       // End checkForCode function 
	
	$(".guess_box").hover(                                                 //增加hover事件
	  function () {
	 	$(this).addClass("my_hover");                                     //当用户停在这个方框上时添加my_hover CSS类
	   },
	   function () {
		  $(this).removeClass("my_hover");                              //移开时删除my_hover CSS类
	   });  // End hover
});