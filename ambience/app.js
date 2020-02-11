const app = () => {
	const audio0 = document.querySelector(".audio0");
	const play = document.querySelector(".play");
	const circle = document.querySelector(".moving_outline circle");
	const video = document.querySelector(".video_container video");
	const sound = document.querySelectorAll(".sound_option sound");
	const time_display = document.querySelector(".time_display");
	const time_select = document.querySelectorAll(".time_option button")

	const outline_circle_length = circle.getTotalLength();
	let clock = 600;
	circle.style.strokeDasharray = outline_circle_length;
	circle.style.strokeDashoffset = outline_circle_length;

	play.addEventListener("click", ()=>{
		check_play(audio0);
	});
	time_select.forEach(option => { 
		option.addEventListener("click", function(){ 
			clock = this.getAttribute("data-time"); 
			time_display.textContent = `${Math.floor(elapsed_time / 60)}:${Math.floor(elapsed_time % 60)}`;
		}); 
	});	
	const check_play = audio0 => {
		if (audio0.paused) {
			audio0.play();
			video.play();
			play.src = "./svg/pause.svg";
		}
		else {
			audio0.pause();
			video.pause();
			play.src = "./svg/play.svg";
		}
	};
	audio0.ontimeupdate = () => {
		let currentTime = audio0.currentTime;
		let elapsed_time = clock - currentTime;
		let seconds = Math.floor(elapsed_time % 60);
		let minutes = Math.floor(elapsed_time / 60);
		let progress = outline_circle_length - (currentTime/clock) * outline_circle_length;
		console.log(progress);
		circle.style.strokeDashoffset = progress;
		time_display.textContent = `${minutes}:${seconds}`;
	}
};

app();