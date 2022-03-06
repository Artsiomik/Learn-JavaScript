let a = 6;
let b = 'Hello!';

console.log(a);

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
	console.log('Работает!!!!!!');
	//console.log(inputIn.value); // value - это то что введено в input
	let b = +inputIn.value; // где + - преобразует все строки в числа 
	console.log(b / 2);
	div.innerHTML = b;
	inputIn.value = " ";
}
	
	