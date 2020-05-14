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

///////////////////////////////////////////////////////////////////////////////////////
// Box title fadeback on mouse leave animations, canceled when mosue moves back in
// "mouseout" would be applicable if I wanted the (div) element's 'children' included
// I use reset_animation to allow animation to happen multiple times and also
// 	to 'cancel' the animation if you were to move mouse out and back in of box
///////////////////////////////////////////////////////////////////////////////////////

var div = document.querySelectorAll("div");
var title = document.getElementsByClassName("TEST");

function reset_animation(i) {
	title[i].style.animation = "none";
	title[i].style.animation = null;
}

function fade_back(i){
	title[i].style.animation = "fade 2.3s linear";
	setTimeout(function() {
		reset_animation(i)
    	}, 2300 );
}

div[1].addEventListener("mouseleave",function(){
	fade_back(0);
});
div[1].addEventListener("mouseover",function(){
	reset_animation(0);
});

div[2].addEventListener("mouseleave",function(){
	fade_back(1);
});
div[2].addEventListener("mouseover",function(){
	reset_animation(1);
});

div[3].addEventListener("mouseleave",function(){
	fade_back(2);
});
div[3].addEventListener("mouseover",function(){
	reset_animation(2);
});

div[4].addEventListener("mouseleave",function(){
	fade_back(3);
});
div[4].addEventListener("mouseover",function(){
	reset_animation(3);
});

div[5].addEventListener("mouseleave",function(){
	fade_back(4);
});
div[5].addEventListener("mouseover",function(){
	reset_animation(4);
});
