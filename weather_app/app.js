//var IP = "";
//var LAT = "";
//var LON = "";

/*$.getJSON('https://api.ipify.org?format=json', function(data){
	IP = data.ip;
});*/

//var geocoder = new google.maps.Geocoder();
//geocoder.geocode( { 'address': address}, function(results, status){
//	var location = results[0].geometry.location;
//	LAT = location.lat()
//	LON = location.lng();
//});

//var getIP = 'http://ip-api.com/json/';
//var getIP = 'http://www.geoplugin.net/json.gp?ip='+IP;
/*function test(){ locate() }
function locate(){
	console.log("FUCK");
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition((position)=>{
			const lat  = position.coords.latitude;
			const lon = position.coords.longitude;
			console.log(lat,lon);
		});
	}
	console.log(lat,lon);
}*/

var openWeatherMap = 'https://api.openweathermap.org/data/2.5/weather'

var LOC = document.getElementById("loc");
var clouds = document.getElementById("clouds");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var desc = document.getElementById("desc");

var LAT = "";
var LON = "";

navigator.geolocation.getCurrentPosition(getLatLon);

function getLatLon(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	console.log("Latitude is "+latitude);
	console.log("Longitude is "+longitude);
	LAT = latitude;
	LON = longitude;

	$.getJSON(openWeatherMap, {
		lat: LAT,
		lon: LON,
		units: 'metric',
		APPID: '2165aab16a1fba518e53a0da29ba38d5'
	}
	).done(function(weather){
		console.log(weather);

		LOC.textContent = weather.name;
		clouds.textContent = weather.clouds.all+"%";
		temp.textContent = weather.main.temp;
		wind.textContent = weather.wind.speed+" Km/h";
		desc.textContent = weather.main.humidity+" %";

	})
}
