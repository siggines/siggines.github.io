const Home = document.getElementById("Home");
const Gallery = document.getElementById("Gallery");
const Other = document.getElementById("Other");

/*
TO-DO:
	Replace scrollTo with 'smooth-scroll'
	Add drop down menu
*/

Home.onclick = function(){
	window.scrollTo( 0, 0 );
};
Gallery.onclick = function(){
	window.scrollTo( 0, 660 );
};
Other.onclick = function(){
	window.scrollTo( 0, 1340 );
};
