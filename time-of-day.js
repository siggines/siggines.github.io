var date=new Date();
var hour=date.getHours();

var good = "Good "
var insert = document.getElementById("time-of-day");
if( hour <= 12 ){ insert.innerHTML = good+"morning..." }
else if( hour <= 18 ){ insert.innerHTML = good+"afternoon..." }
else if( hour <= 24 ){ insert.innerHTML = good+"evening..." }
