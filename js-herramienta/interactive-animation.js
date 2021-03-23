## /* This is a feature to get to specific url pages such as youtube channels */

var chan = document.getElementById("chan");
var board = "";

function enter(input){
	if(event.key === 'Enter'){
		board = input.value;
	}
}

function attach(){
	var together = ""+board+"";
	window.location = together;
	board.value="";
}

## /* This is an interactive animation which triggers the anim on mouse enter and mouse leave */

var elements = document.getElementsByClassName("child");
var titles = document.getElementsByClassName("title");

function reset_animation(i) {
	titles[i].style.animation = "none";
	titles[i].style.animation = null;
}

function fade_back(i){
	titles[i].style.display = "block";
	titles[i].style.animation = "fade 3s linear";
	setTimeout(function() {
		reset_animation(i);
	}, 3000 );
}

for (let i = 0; i < elements.length; i++) {
	const el = elements[i];

	el.addEventListener('mouseover', () => {
		reset_animation(i);
	})

	el.addEventListener('mouseleave', () => {
		fade_back(i);
	});
}
