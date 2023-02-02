window.addEventListener('load', function(){
	let box = document.querySelector('.faq');

	delegate(box, 'click', '.ask', function(){
		let item = this.closest('.item');
		let answer = item.querySelector('.answer');
		
		if(answer.classList.contains('open')){
			let animation = answer.animate([
				{ opacity: 1 },
				{ opacity: 0 }
			], { duration: 300 });

			animation.addEventListener('finish', function(){
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');

			answer.animate([
				{ opacity: 0 },
				{ opacity: 1 }
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