// let input = document.querySelector('.one');
// document.querySelector('button').onclick = () => {
// 	// => - стрелочную фунцию можно применять вместе анонимной функции
// 	console.log(input.value);
// 	// можно применить стиль с помощью javaScript(если свойство стиля состоит из нескольктх слов применяем кэмелКейс)
// 	document.querySelector('button').style.backgroundColor = input.value;
// 	// input.value = ' '; // таким образом можно почистить input после каждого воода данных
// }
// let span = document.querySelector('span');
// input.oninput = () => {
// 	console.log(input.value);
// 	span.innerHTML = input.value;
// }

let input = document.querySelector('#i2');
document.querySelector('#btn-1').onclick = () => {
	console.log(input.value);
	// console.log(input.checked); //проверяем стоит ли галочка
	if (input.checked) {
		console.log('нажат');
	}
	else {
		console.log('отжат');
	}
}

document.querySelector('#btn-2').onclick = (event) => {
	event.preventDefault();
	// let text = document.querySelector('#two');
	// console.log(text.value);
	let form = document.querySelector('form');
	console.log(form);
	console.log(form.elements.two.value);
	console.log(form.elements.three.value);
}