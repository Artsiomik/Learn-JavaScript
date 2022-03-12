let f1 = document.querySelector('.f-1');

function one() {
	console.log('work');
}

one();


// f1.onclick = function () { // анонимная фунция - используется в коде только один раз
// 	console.log('hello');
// }
f1.onclick = () => { // стрелочная функция это один из способов записи анонимной функции
	console.log('hello');
}
console.log(one()); // undefined



function two() {
	console.log('work 22222');
	return 54;
}
two();
console.log(1 + two());

let a = 8;
let b = 9;
// let c;
function mylti() {
	// console.log(a * b);
	// c = a * b;
return a * b;
}
let c1 = mylti();
let c2 = 10 * mylti();
console.log(c1, c2);

function mylti2(x, y) {
	return x * y;
}
mylti2();
console.log(mylti2(5, 7));


document.querySelector('.f-2').onclick = function () {
	console.log('+++++++++++');
}
document.querySelector('.f-2').onclick = () => {
	console.log('+++++++++++');
	console.log('arrow');
}