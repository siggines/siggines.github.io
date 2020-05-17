/////////////////////////////////////////////////////
//	Changes page on hash change + loads images
////////////////////////////////////////////////////

var image = document.getElementsByClassName("image");

var readOut = document.getElementById("text");

var doc = "";

function read(){
	if(location.hash){
		var file = "./doc/"+(location.hash);
		var img = "./pix/"+(location.hash);
		file = file.replace("#","");
		img = img.replace("#","");
		image[0].src = img + ".png" ;
		/*image[1].src = img + "2" + ".png" ;
		image[2].src = img + "3" + ".png" ;
		image[3].src = img + "4" + ".png" ;
		image[4].src = img + "5" + ".png" ;
		image[5].src = img + "6" + ".png" ;*/
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					console.log(rawFile.responseText);
					var allText = rawFile.responseText;
					console.log(allText);
					doc = allText;
				}
			}
		}
		rawFile.send(null);
	}
	readOut.textContent = doc;
}

/////////////////////////////////////////////////////
//	On image hover, and on image click
////////////////////////////////////////////////////

var cover = document.getElementsByClassName("cover");

image[0].addEventListener("click",function(){
	image[0].classList.add("open");
	cover[0].classList.add("on");
}
);

function exit(){
	image[0].classList.remove("open");
	cover[0].classList.remove("on");
}
