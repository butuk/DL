window.addEventListener('DOMContentLoaded', function(){
	let box = document.querySelector('.box');
	let btnAdd = document.querySelector('.btnAdd');

	box.addEventListener('click', function (e){
		findAndRecolorItem(e.target, this);
	});

	btnAdd.addEventListener('click', function(){
		let div = document.createElement('div');
		div.innerHTML = `Item <strong>${box.children.length + 1}</strong>`;
		div.classList.add('item');
		box.appendChild(div);
	});
});

function setRandomColor(el){
	let colors = ['#f00', '#0f0', '#ff0'];
	let num = Math.floor(Math.random() * colors.length);
	el.style.color = colors[num];
}

function findAndRecolorItem(node, parent) {
		if(node === parent) {
			return;
		} else if(node.classList.contains('item')) {
			setRandomColor(node);
			return;
		}
		findAndRecolorItem(node.parentNode, parent);
}
