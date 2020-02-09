function smoothscroll(target, duration){
	var target = document.querySelector(target, duration)
	var target_pos = target.getBoundingClientRect().top;
	var start_pos = window.pageYOffset;
	var distance = target_pos - start_pos;
	var start_time = null;

	function animation(currentTime) {
		if (start_time === null) start_time = currentTime;
		var time_elapsed = currentTime - start_time;
		var run = ease(time_elapsed,start_pos,distance,duration);
		window.scrollTo(0,run);
		if (time_elapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t,b,c,d) {
		t /= d / 2;
		if (t<1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

var section1 = document.querySelector(".section1");
section1.addEventListener('click', function() {
	smoothscroll(".section1", 2001);
});

