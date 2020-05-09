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
