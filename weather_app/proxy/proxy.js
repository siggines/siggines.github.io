var IP = 'http://ip-api.com/json/';

fetch(IP)
	.then(
		res =>{
			return res.text();
		}
	)
	.then(
		data =>{
			$('.write').html(data);
		}
	)
;

