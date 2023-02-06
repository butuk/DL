window.addEventListener('load', function(){
	new Slider('.gallery-1');

	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000)
});

class Slider {
	constructor(selector) {
		this.slider = document.querySelector(selector);
		this.btnPrev = this.slider.querySelector('.buttons .prev');
		this.btnNext = this.slider.querySelector('.buttons .next');
		this.images = this.slider.querySelectorAll('.gallery .photos img');

		this.imageNumber = 0;

		this.btnNext.addEventListener('click', () => {
			this.next();
		});
		this.btnPrev.addEventListener('click', () => {
			this.previous();
		});
	}

	previous() {
		this.images[this.imageNumber].classList.remove('showed');
		this.imageNumber--;

		if(this.imageNumber < 0){
			this.imageNumber = this.images.length - 1;
		}

		this.images[this.imageNumber].classList.add('showed');
	}

	next() {
		this.images[this.imageNumber].classList.remove('showed');
		this.imageNumber++;

		if(this.imageNumber >= this.images.length){
			this.imageNumber = 0;
		}

		this.images[this.imageNumber].classList.add('showed');
	}
}

