var canvas = document.getElementById("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var mag = 600;
var Xpan = 0; var Ypan = 0;

function check(x,y){ //returns true or false
	var X = x; var Y = y;

	var Xsqr = X*X; var Ysqr = Y*Y; // Squared
	var XX = X*X; var YY = Y*Y;	// Doubled

	for( var i = 0; i < 10; ++i ){
		X = Xsqr - Ysqr + x;
		Y = XX*YY;
	}

	if( X+Y < 5 )
		return true;
	else
		return false;
}

function render(){
	for( var x = 0; x < canvas.width; ++x ){
		for( var y = 0; x < canvas.height; ++y ){
			var Xready = x/mag-Xpan;
			var Yready = y/mag-Ypan;
			var CHECK = check(Xready,Yready);
			if(check)
				ctx.fillRect(x,y, 1,1);
		}
	}
}
