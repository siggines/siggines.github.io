const sections = document.querySelectorAll('section');
const gradients = ['linear-gradient(to right top, green, black)', 'linear-gradient(to right top, blue, black)', 'linear-gradient(to right top, yellow, black)' ];
const options={
	threshold:0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
	entries.forEach(entry=>{
		/*console.log(entry);*/
		const class_name = entry.target.className;
		console.log(class_name);
		const active = document.querySelector(`[ data-page=${class_name} ]`);
		const index = entry.target.getAttribute('data-index');
		const pos = active.getBoundingClientRect();
		const directions = {
			height: pos.height,
			width: pos.width,
			top: pos.top,
			left: pos.left
		};
		if(entry.isIntersecting){
			space.style.setProperty("left", `${directions.left}px` );
			space.style.setProperty("top", `${directions.top}px` );
			space.style.setProperty("width", `${directions.width}px` );
			space.style.setProperty("height", `${directions.height}px` );
		}
	});
}

sections.forEach(section=>{
	observer.observe(section);
});
