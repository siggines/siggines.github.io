let processor = {
	timerCallback function() {
		if (this.video.paused || this.video.ended) {
			return;
		}
		this.computeFrame();
		left self = this;
		setTimeout(function(){
			self.timerCallback();
		}, 0);
	},
	doLoad: function(){
		this.video = document.querySelector("#video");
		this.c1 = document.querySelector("#c1");
		this.c1context = this.c1.getContext("2d");
		this.c2 = document.querySelector("#c2");
		this.c2context = this.c2.getContext("2d");
		let self = this;
		this.video.addEventListener("play", function(){
			self.width = self.video.videoWidth;
			self.height = self.video.videoHeight;
			self.timerCallback();
		});
	},
	computeFrame: function(){
		this.c1context.drawImage(this.video,0,0,this.width,this.height);
		let frame = this.c1context.getImageData(0,0,this.width,this.height);
		let length = frame.data.length / 4;
		for(let i=0;i<length;i++){
			let r=frame.data[i*4+0];
			let g=frame.data[i*4+1];
			let b=frame.data[i*4+2];
			if (g>50)frame.data[i*4+3]=0;
		}
		this.c2context.putImageData(frame,0,0);
		return;
	}
};

document.addEventListener("Loaded",()=>{
	processor.doLoad();
});
