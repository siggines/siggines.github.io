var canvas = document.getElementById("canvas");
canvas.width = "1000";
canvas.height = "1000";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

function check(x,y){
	var X = x; var Y = y;
	var code=-1;

	for( var i = 0; i < 5000; ++i ){
		var Xn = X*X - Y*Y + x;
		var Yn = 2* X * Y + y;
		X=Xn; Y=Yn;

		var number = X*Y;
		if( number>10 )
			code=0;
		else if( number<=0 && number>-1 )
			code=1;
		else if( number<=-1 && number>-2 )
			code=2;
		else if( number<=-2 && number>-3 )
			code=3;
		else if( number<=-3 && number>-4 )
			code=4;
		else if( number<=-4 && number>-5 )
			code=5;
		else if( number<=-5 && number>-6 )
			code=6;
		else if( number<=-6 && number>-7 )
			code=7;
	}

	return code;
}

(function(){
	var mag = 500;
	var Xpan = 1.4; var Ypan = 1.2;
	for( var x = 0; x < canvas.width; ++x ){
		for( var y = 0; y < canvas.height; ++y ){
			var Xready = x/mag-Xpan;
			var Yready = y/mag-Ypan;
			var CHECK = check(Xready,Yready);
			if(CHECK==-1){
				ctx.fillStyle = "darkred";
				ctx.fillRect(x,y, 1,1);
			}
			else{
				switch(CHECK){
					case 7:
						ctx.fillStyle = "grey";
						break;
					case 6:
						ctx.fillStyle = "skyblue";
						break;
					case 5:
						ctx.fillStyle = "pink";
						break;
					case 4:
						ctx.fillStyle = "green";
						break;
					case 2:
						ctx.fillStyle = "blue";
						break;
					case 1:
						ctx.fillStyle = "red";
						break;
					case 0:
						ctx.fillStyle = "black";
						break;
					default:
						ctx.fillStyle = "cyan";
				}
				ctx.fillRect(x,y, 1,1);
			}
		}
	}
}
)();
