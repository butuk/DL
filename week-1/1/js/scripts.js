window.addEventListener('load', function(){

	let inp1 = document.querySelector('.num1');
	let inp2 = document.querySelector('.num2');
	let btnRun = document.querySelector('.btnRun');
	let resultBox = document.querySelector('.result');
	let operationChanger = document.querySelector('.operation');
	let operation = operationChanger.value;

	inp1.addEventListener('input', filterInput);
	inp1.addEventListener('input', readyToCount);
	inp2.addEventListener('input', filterInput);
	inp2.addEventListener('input', readyToCount);
	operationChanger.addEventListener('change', changeOperation);
	operationChanger.addEventListener('change', readyToCount);
	btnRun.addEventListener('click', calculate);
	btnRun.addEventListener('click', disableBtn);

	function filterInput () {
		let str = '';
		const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		for (let symbol of this.value) {
			if(numbers.includes(symbol)) {
				str += symbol;
			}
		}
		this.value = str;
	}

	function changeOperation () {
		operation = this.value;
	}

	function calculate (){
		if(!inp1.value || !inp2.value) {
			return resultBox.innerHTML = 'Введите оба числа';
		}
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let total = 0;
		switch (operation) {
			case '+':
				total = num1 + num2;
				break;
			case '−':
				total = num1 - num2;
				break;
			case '×':
				total = num1 * num2;
				break;
			case '/':
				total = num1 / num2;
		}
		resultBox.innerHTML = total;
	}

	function disableBtn() {
		this.disabled = true;
	};

	function readyToCount() {
		resultBox.innerHTML = '';
		btnRun.disabled = false;
	}
});
