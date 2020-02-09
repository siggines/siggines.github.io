const text = ['bonjour', 'hola', 'ciao', 'hallo' ];
let count = 0;
let text_indexer = 0;
let current_text = "";
let letter = "";


(function type(){
	if (count === text.length){ count = 0; } //resets count after 'hallo'
	current_text = text[count];
	letter = current_text.slice(0, ++text_indexer); //so 0, 1... 2... 3 kinda thing. It makes the word becasue second argument is always end, doesnt repeat 0 because first argument is always begin 

	document.querySelector(".typing").textContent = letter; 
	if (letter.length === current_text.length){ 
		count++; //Once word is complete moves on to next word 
		text_indexer = 0; //reset my 'index specifier'

	}
	setTimeout(type, 500);

}());
