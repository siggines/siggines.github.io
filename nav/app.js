/* Navbar */
const Home = document.getElementById("Home");
const Gallery = document.getElementById("Gallery");
const Other = document.getElementById("Other");

/* Actual page sections */
const H = document.querySelector(".Home");
const G = document.querySelector(".Gallery");
const O = document.querySelector(".Other");

var rectH = H.getBoundingClientRect();
var yH = rectH.top;

var rectG = G.getBoundingClientRect();
var yG = rectG.top;

var rectO = O.getBoundingClientRect();
var yO = rectO.top;

Home.onclick = function(){
	window.scrollTo( 0, yH );
};
Gallery.onclick = function(){
	window.scrollTo( 0, yG );
};
Other.onclick = function(){
	window.scrollTo( 0, yO );
};

function back(){
	window.history.back()
}
