var chan = document.getElementById("chan");
var board = "";

function enter(input){
	if(event.key === 'Enter'){
		board = input.value;
	}
}

function attach(){
	var together = "https://boards.4channel.org/"+board+"/catalog";
	window.location = together;
	board.value="";
}

// "mouseout" would be applicable if I wanted the (div) element's 'children' included

var div = document.querySelectorAll("div");

var box = document.querySelector(".child h3");

var TEST = document.getElementsByClassName("TEST");

div[1].addEventListener("mouseleave",function(){
	TEST[0].style.animation = "fade 2.3s linear";
});
div[2].addEventListener("mouseleave",function(){
	TEST[1].style.animation = "fade 2.3s linear";
});
div[3].addEventListener("mouseleave",function(){
	TEST[2].style.animation = "fade 2.3s linear";
});
div[4].addEventListener("mouseleave",function(){
	TEST[3].style.animation = "fade 2.3s linear";
});
div[5].addEventListener("mouseleave",function(){
	TEST[4].style.animation = "fade 2.3s linear";
});
