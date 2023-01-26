'use strict';

window.addEventListener('load', function(){

	let form = document.querySelector('.form');
	let inputs = form.querySelectorAll('.check');

	const conditions = {
		name: {
			condition(input){
				const Reg = new RegExp('^[a-zA-Z]*$');
				return Reg.test(input);
			},
			err:'Должы быть только буквы',
		},
		phone: {
			condition(input) {
				const controlArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
				for (let i = 0; i < input.length; i++) {
					if(!controlArr.includes(input[i])) {
						return false;
					}
				}
				return true;
			},
			err:'Могут быть только цифры',
		},
		email: {
			condition(input){
				for (let i = 0; i < input.length; i++) {
					if(input[i] === '@') {
						return true;
					}
				}
				return false;
			},
			err:'Поле должно содержать символ @',
		}
	}

	form.addEventListener('submit', function(e){
		let isError = false;
		clearErrorMessages();

		for(let i = 0; i < inputs.length; i++) {
			if (inputs[i].value.trim().length === 0) {
				creatErrorMessage(inputs[i], 'Поле должно быть заполнено');
				isError = true;
			} else if(!conditions[inputs[i].name].condition(inputs[i].value)){
				creatErrorMessage(inputs[i], conditions[inputs[i].name].err);
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
		clearErrorMessages();
	});

	function creatErrorMessage(element, text) {
		element.classList.add('err');
		const message = document.createElement('span');
		message.innerHTML = text;
		message.classList.add('errMessage');
		element.insertAdjacentElement('afterEnd', message);
	}

	function clearErrorMessages() {
		document.querySelectorAll('.errMessage').forEach(message => {
			message.remove();
		});
	}
})