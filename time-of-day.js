var date=new Date();
var hour=date.getHours();

var prefix = "Good "
var insert = document.getElementById("time-of-day");

if( hour < 12 ){ insert.innerHTML = prefix+"morning..." }
else if( hour < 18 ){ insert.innerHTML = prefix+"afternoon..." }
else if( hour < 24 ){ insert.innerHTML = prefix+"evening..." }
