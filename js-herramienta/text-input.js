var messages = document.getElementById("messages");
var input = document.getElementById("input");
var send = document.getElementById("send");

var count = 0;

var stream ={

	SEND: function(){
		var add = document.createElement("li");
		var INPUT = input.value;
		var length = INPUT.length;
		add.innerHTML = INPUT;
		messages.appendChild(add);
		input.value = "";
		function COUNT(x){
			x+=1;
			count = x;
		}
		COUNT(count);
		console.log(length, count);
	}

}

send.addEventListener("click",function(){
	stream.SEND();
});
