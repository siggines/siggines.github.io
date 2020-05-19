/////////////////////////////////////////////////////
//	Loads relevant content on hash change
////////////////////////////////////////////////////

var image = document.getElementsByClassName("image");

var readOut = document.getElementById("text");
/* readOut.textContent = ""; */

var list_readOut = document.getElementById("species");
list_readOut.textContent = "";

var x,n;
var count = 0;

/* TO-DO:

	· Make 'read_this()' return value in 'read()' instead of defining 'x'

*/
function read_this(FILE){

	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", FILE, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				x = rawFile.responseText;
			}
		}
	}
	rawFile.send(null);

}

function read(){
	if(location.hash){

		var ref=(location.hash);
		ref = ref.replace("#","");

		var file = "./doc/"+ref;

		var img = "./pix/"+ref;
		var imgNum = img+"_count";
		var imgArray = [ img,img+"2",img+"3",img+"4",img+"5",img+"6" ];

		var list = "./doc/"+ref+"_list";

		read_this(file);
		readOut.textContent = x;

		read_this(imgNum);
		count = Number(x);

		for( n=0; n<count; ++n )
			image[n].src = imgArray[n] + ".png" ;

		read_this(list);
		list_readOut.textContent = x;

	}
}

/////////////////////////////////////////////////////
//	On image click
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

////////////////////////////////////////////////////
//	Customised Selection Menu		[Unfinished]
/////////////////////////////////////////////////////

var i;

var wrapper = document.getElementsByClassName("selections");

var actual = document.getElementsByClassName("list");

function custom(){
	/*actual[0].classList.add("custom");*/
}

