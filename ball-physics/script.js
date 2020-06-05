var animation,key,gravity;
var Xpos=200, Ypos=200;
var Xvel=10, Yvel=4;
var paused=false;
var delta = 1, debug = 0;

function start(){
	animation=window.setInterval("move()",2);
	gravity=window.setInterval("grav()",500);
}
function move(){
	// When ball hits walls
	if( Xpos>=800 || Xpos<=0 )
		Xvel=-Xvel;
	if(Ypos>=400)
		Yvel=-Yvel-delta
	if(Ypos<=0)
		Yvel=-Yvel+delta;

	if( Yvel < 1 && Yvel >0 )
		Yvel=3
	if( Yvel < -1 && Yvel <0 )
		Yvel=-3

	if( Yvel > 0 )
		debug+=1
	if( Yvel < -1 ){
		debug=0;
		debug2=0;
	}
	if( debug > 500 )
		Yvel=-1;

	Xpos+=Xvel; Ypos+=Yvel;
	ball.style.top=Ypos+"px"; ball.style.left=Xpos+"px";
}
function grav(){
	if( Yvel > 0 )
		Yvel*=delta
	if( Yvel < 0 )
		Yvel/=delta
}

function set_position(e){
	// Using offsets, could you get co-ord from element not whole page?
	Xpos = e.clientX-380;
	Ypos = e.clientY-50;
	ball.style.top=Ypos+"px"; ball.style.left=Xpos+"px";

	// In case of out-of-window teleport
	if( Xpos>=800 )
		Xpos=790;
	if( Xpos<=0 )
		Xpos=10;
	if( Ypos>=400 )
		Ypos=390;
	if( Ypos<=0 )
		Ypos=10;

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
		Xvel*=1.3;Yvel*=1.3;
		/*if( Yvel==0 || Xvel==0 ){
			Xvel+=1.3;Yvel+=1.3;
		}*/
	}
	// Decelerate
	if(key== "D" ){
		Xvel/=1.3;Yvel/=1.3;
	}
	// Change in mass
	if(key== "L" || key== "H" ){
		if( delta < 4 ){
			if(key=="H")
				delta+=1
		}
		if( delta > -4 ){
			if(key=="L")
				delta-=1
		}
	}
}
