window.addEventListener('load', function(){
	let menu = document.querySelector('.menu');
	let toTop = document.querySelector('.scroll-to-top');
	let content = document.querySelector('.content');

	displayMoveButton(toTop, content, 22);
	
	if(window.location.hash.length > 0){
		let link = menu.querySelector(`a[href$="${window.location.hash}"]`);
		
		if(link !== null){
			applyMenuLinkClick(menu, link, false);
		}
	}

	delegate(menu, 'click', 'a', function(e){
		e.preventDefault();
		applyMenuLinkClick(menu, e.target);
	});

	toTop.addEventListener('click', () => {
		scrollWindow(0, true);
	})
	window.addEventListener('scroll', () => {
		displayMoveButton(toTop, content, 22);
	})
});

function applyMenuLinkClick(menu, link, animated = true){
	let target = document.querySelector(link.hash);

	if(target !== null){
		let activeClass = 'menu__link-active';
		let activeLink = menu.querySelector(`.${activeClass}`);

		if(activeLink !== null){
			activeLink.classList.remove(activeClass);
		}
		
		link.classList.add(activeClass);

		scrollWindow((target.offsetTop - 70), animated);
	}
}

function scrollWindow(point, animated) {
	window.scrollTo({
		top: point,
		behavior: animated ? 'smooth' : 'auto'
	});
}

function displayMoveButton(button, content, position) {
	let contentPosition = content.getBoundingClientRect().top;
	if(contentPosition < position) {
		button.style.display = 'flex';
	} else {
		button.style.display = 'none';
	};
}

function delegate(box, eventname, selector, fn){
	box.addEventListener(eventname, function(e){
		let el = e.target.closest(selector);
		
		if(el !== null && box.contains(el)){
			fn.call(el, e);
		}
	});
}

/*
	// offsetTop is not good, go to HW
	// shift = 70, maybe we get it from computedStyle... HW
*/