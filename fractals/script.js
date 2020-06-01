var canvas = document.getElementById("canvas");
canvas.width = "1000";
canvas.height = "1000";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

function check(x,y){ //returns true or false
	var X = x; var Y = y;

	for( var i = 0; i < 3000; ++i ){
		var Xn = X*X - Y*Y + x;
		var Yn = 2* X * Y + y;
		X=Xn; Y=Yn;
	}

	if( X*Y < 5 )
		return true;

	return false;
}

(function(){
	var mag = 1000;
	var Xpan = 1; var Ypan = 0;
	for( var x = 0; x < canvas.width; ++x ){
		for( var y = 0; y < canvas.height; ++y ){
			var Xready = x/mag-Xpan;
			var Yready = y/mag-Ypan;
			var CHECK = check(Xready,Yready);
			if(CHECK){
				ctx.fillRect(x,y, 1,1);
			}
		}
	}
}
)();
