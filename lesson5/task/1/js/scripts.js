window.addEventListener('load', function(){
	let box = document.querySelector('.faq');

	delegate(box, 'click', '.ask', function(){
		let item = this.closest('.item');
		let answer = item.querySelector('.answer');
		let height = answer.offsetHeight;
		
		if(answer.classList.contains('open')){
			let animation = answer.animate([
				{ height: `${height}px` },
				{ height: 0 }
			], { duration: 300 });

			animation.addEventListener('finish', function(){
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');
			height = getHiddenHeight(answer);

			answer.animate([
				{ height: 0 },
				{ height: `${height}px` }
			], { duration: 300 });
		}
	});

});

function delegate(box, eventname, selector, fn){
	box.addEventListener(eventname, function(e){
		let el = e.target.closest(selector);
		
		if(el !== null && box.contains(el)){
			fn.call(el, e);
		}
	});
}

function getHiddenHeight(el) {
	if(!el?.cloneNode) {
		return null;
	}
	const clone = el.cloneNode(true);
	Object.assign(clone.style, {
		overflow: 'hidden',
		height: 'auto',
		maxHeight: 'none',
		visibility: 'hidden',
		display: 'block',
	})
	el.after(clone);
	const height = clone.offsetHeight;
	clone.remove();
	return height;
}