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

//var box = document.querySelector(".child h3");

var TEST = document.getElementsByClassName("TEST");


function reset_animation(i) {
	TEST[i].style.animation = "none";
	TEST[i].style.animation = null;
}

div[1].addEventListener("mouseleave",function(){
	TEST[0].style.animation = "fade 2.3s linear";
	setTimeout(function() {
		reset_animation(0)
    	}, 2300 );
});
div[2].addEventListener("mouseleave",function(){
	TEST[1].style.animation = "fade 2.3s linear";
	setTimeout(function() {
		reset_animation(1)
    	}, 2300 );
});
div[3].addEventListener("mouseleave",function(){
	TEST[2].style.animation = "fade 2.3s linear";
	setTimeout(function() {
		reset_animation(2)
    	}, 2300 );
});
div[4].addEventListener("mouseleave",function(){
	TEST[3].style.animation = "fade 2.3s linear";
	setTimeout(function() {
		reset_animation(3)
    	}, 2300 );
});
div[5].addEventListener("mouseleave",function(){
	TEST[4].style.animation = "fade 2.3s linear";
	setTimeout(function() {
		reset_animation(4)
    	}, 2300 );
});
