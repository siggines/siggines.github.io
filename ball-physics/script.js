var animation,key;
var Xpos=200, Ypos=200;
var Xvel=10, Yvel=4;
var paused=false;
var pos = 0;

function start(){
	animation=window.setInterval("move()",2);
}

function move(){
	Xpos+=Xvel; Ypos+=Yvel;

	if( Xpos>=800 || Xpos<=0 )
		Xvel=-Xvel;
	if( Ypos>=400 || Ypos<=0 )
		Yvel=-Yvel;

	ball.style.top=Ypos+"px"; ball.style.left=Xpos+"px";
	// console.log( Xpos,Ypos );
}

function set_position(e){
	Xpos=e.clientX; Ypos=e.clientY;
	if( Xpos>=800 )
		Xpos=790;
	if( Xpos<=0 )
		Xpos=0;
	if( Ypos>=400 )
		Ypos=390;
	if( Ypos<=0 )
		Ypos=0;
	// console.log( Xpos,Ypos );
}

function input_event(e){
	key=String.fromCharCode(e.keyCode);
	// Pause
	if(key== " " ){
		if(!paused){
			window.clearInterval(animation);paused=true;
		}
		else{
			start();paused=false;
		}
	}
	// Reverse
	if(key== "R" ){
		Xvel=-Xvel;Yvel=-Yvel;
	}
	// Accelerate
	if(key== "A" ){
		if( Xvel > 0)
			Xvel=20;
		if( Xvel < 0)
			Xvel=-20;
		if( Yvel > 0)
			Xvel=8;
		if( Yvel < 0)
			Xvel=-8;
	}
	// Decelerate
	if(key== "D" ){
		Xvel/=2;Yvel/=2;
	}
	// Decrease-mass
	if(key== "L" ){
		if( Yvel > 0 )
			Yvel*=2;
		if( Yvel < 0 )
			Yvel*=-2;
	}
	// Increase-mass
	if(key== "H" ){
		Yvel/=2;
	}
	// console.log(key);
}
