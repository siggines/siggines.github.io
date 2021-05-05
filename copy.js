function COPY(specify){

	var range = document.createRange();
	var copied;

	if( specify == 1 ){
		range.selectNode(document.getElementById("mail1"));
		copied = document.getElementById("copied1");
		copied.classList.add("fader");
	}
	else if( specify == 2 ){
		range.selectNode(document.getElementById("mail2"));
		copied = document.getElementById("copied2");
		copied.classList.add("fader");
	}

	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges(); // to deselect

}
