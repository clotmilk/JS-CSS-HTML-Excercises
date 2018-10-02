// raw javaScript code
// Login function 
(function(){
	window.onload= function(){
		var modal= document.getElementById("id01");
		var LogIn = document.getElementById("login");
		var bgc = document.body;
		LogIn.addEventListener("click",function(){
			modal.style.display="block";
			bgc.style.background="rgba(205,205,170,0.45)";

		})
	};
})();
//Close Login function
(function(){
	var close = document.getElementById('close');
	var modal= document.getElementById("id01");
	var bgc = document.body;
	close.addEventListener("click",function(){
		modal.style.display="none";
		bgc.style.background="rgba(0,0,0,0)"
	})
})();

// mouse icon 
(function(){
	document.onmousemove= function(e){
		e=e||window.event;
		var pageX = e.pageX;
		var pageY = e.pageY;

		var imgB = document.getElementById('mouse');
		imgB.style.left =(pageX+5) +'px';
		imgB.style.top = (pageY+5) +'px';
	}	
})();

//jquery 

$('#banner img').css('display','none');
$('#banner img').eq(0).css('display','block');
$('#banner ul li').eq(0).click(function(){
	$('#banner img').css('display','none');
	$('#banner img').eq(0).css('display','block');
})
$('#banner ul li').eq(1).click(function(){
	$('#banner img').css('display','none');
	$('#banner img').eq(1).css('display','block');
})
$('#banner ul li').eq(2).click(function(){
	$('#banner img').css('display','none');
	$('#banner img').eq(2).css('display','block');
})
$('#banner ul li').eq(3).click(function(){
	$('#banner img').css('display','none');
	$('#banner img').eq(3).css('display','block');
})
