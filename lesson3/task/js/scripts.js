window.addEventListener('load', function(){

	let form = document.querySelector('.form');
	let inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', function(e){
		let isError = false;		

		for(let i = 0; i < inputs.length; i++){
			if(inputs[i].value.length == 0){
				inputs[i].classList.add('err');
				isError = true;
			}
		}

		if(isError){
			e.preventDefault();
			// alert('Заполните все поля!');
		}
	});

	form.addEventListener('focusin', function(e){
		if(e.target.classList.contains('check')){
			e.target.classList.remove('err');
		}
	});
});