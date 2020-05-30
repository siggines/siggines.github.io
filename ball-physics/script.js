var animation,key;
var Xpos=200, Ypos=200;
var Xvel=5, Yvel=2.5;
var paused=false;
var pos = 0;

function start(){
	animation=window.setInterval("move()",1);
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
	/*
	if( Yvel < 3)
		Yvel=-.5;
	if( Yvel < -1)
		Yvel=-3;
		*/
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
			Xvel*=1.2;
		if( Xvel < 0)
			Xvel*=-1.2;
		if( Yvel > 0)
			Xvel*=1.2;
		if( Yvel < 0)
			Xvel*=-1.2;
	}
	// Decelerate
	if(key== "D" ){
		Xvel/=1.2;Yvel/=1.2;
	}
	// Decrease-mass
	if(key== "L" ){
		if( Xvel > 0)
			Xvel*=1.2;
		if( Xvel < 0)
			Xvel*=-1.2;
		if( Yvel > 0)
			Xvel*=1.4;
		if( Yvel < 0)
			Xvel*=-1.4;
	}
	// Increase-mass
	if(key== "H" ){
		if( Xvel > 0)
			Xvel/=1.2;
		if( Xvel < 0)
			Xvel/=-1.2;
		if( Yvel > 0)
			Xvel/=1.4;
		if( Yvel < 0)
			Xvel/=-1.4;
	}
	else if(key== "P"){
		console.log(key)
	}
	// console.log(key);
}
