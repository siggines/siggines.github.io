var getIP = 'http://ip-api.com/json/';
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'

var LOC = document.getElementById("loc");
var clouds = document.getElementById("clouds");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var desc = document.getElementById("desc");
//var DIS = document.getElementById("loc");

$.getJSON(getIP).done(function(location) {
	$.getJSON(openWeatherMap, {
		lat: location.lat,
		lon: location.lon,
		units: 'metric',
		APPID: '2165aab16a1fba518e53a0da29ba38d5'
	}).done(function(weather) {
		console.log(weather);

		LOC.textContent = weather.name;

		clouds.textContent = weather.clouds.all+"%";
		temp.textContent = weather.main.temp;
		wind.textContent = weather.wind.speed+" Km/h";
		desc.textContent = weather.main.humidity+" %";

	})
})
