///////////////////////////////////////////////////////////////////////////////////////
// Box title fadeback on mouse leave animations, canceled when mosue moves back in
// "mouseout" would be applicable if I wanted the (div) element's 'children' included
// I use reset_animation to allow animation to happen multiple times and also
// 	to 'cancel' the animation if you were to move mouse out and back in of box
//
// For Some reason eventListeners in commented out for loop will not work so went through manually
//	advice appreciated lol
///////////////////////////////////////////////////////////////////////////////////////

var div = document.querySelectorAll("div");
var title = document.getElementsByClassName("title");
//var len = div.length;

function reset_animation(i) {
	title[i].style.animation = "none";
	title[i].style.animation = null;
}

function fade_back(i){
	title[i].style.display = "block";
	title[i].style.animation = "fade 3s linear";
	setTimeout(function() {
		reset_animation(i);
    	}, 3000 );
}

div[2].addEventListener("mouseleave",function(){
	fade_back(0);
});
div[2].addEventListener("mouseover",function(){
	reset_animation(0);
});

div[3].addEventListener("mouseleave",function(){
	fade_back(1);
});
div[3].addEventListener("mouseover",function(){
	reset_animation(1);
});

div[4].addEventListener("mouseleave",function(){
	fade_back(2);
});
div[4].addEventListener("mouseover",function(){
	reset_animation(2);
});

div[5].addEventListener("mouseleave",function(){
	fade_back(3);
});
div[5].addEventListener("mouseover",function(){
	reset_animation(3);
});

div[6].addEventListener("mouseleave",function(){
	fade_back(4);
});
div[6].addEventListener("mouseover",function(){
	reset_animation(4);
});

div[7].addEventListener("mouseleave",function(){
	fade_back(5);
});
div[7].addEventListener("mouseover",function(){
	reset_animation(5);
});

div[8].addEventListener("mouseleave",function(){
	fade_back(6);
});
div[8].addEventListener("mouseover",function(){
	reset_animation(6);
});

/*for( var x = 1; x <= len; ){
	function reset_animation(i) {
		title[i].style.animation = "none";
		title[i].style.animation = null;
	}

	function fade_back(i){
		title[i].style.display = "block";
		title[i].style.animation = "fade 3s linear";
		setTimeout(function() {
			reset_animation(i);
		}, 3000 );
	}
	var i = x-2;
	var div = document.querySelectorAll("div");
	var title = document.getElementsByClassName("title");

	div[x].addEventListener("mouseleave",function(){
		fade_back(i);
	});
	div[x].addEventListener("mouseover",function(){
		reset_animation(i);
	});

	console.log("?");
	++x
}*/
