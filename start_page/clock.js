function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h+" "+m; //+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i){ // Puts zero infront of 0-9
    if (i<10) {i = "0" + i};
    return i;
}
