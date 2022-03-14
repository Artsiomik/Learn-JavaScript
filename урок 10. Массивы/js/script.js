// let zodiak = ['козерог', 1, 1, 19];
// let man=['Ivan', 'male', 178, 95];
// console.log(zodiak);
// console.log(man);




// задача: поменять местами первый и последний элементы массива

let a = [5, 6, 3, 235, 245, 35, 987];
console.log(a);
let t = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a);




// let out = '';
// for (let i = 0; i < a.length; i++) {
// out += a[i] + "_";
// }
// document.querySelector('.out-1').innerHTML = out;

// for (let i = 0; i < a.length; i++) {
// 	if (a[i] % 2 == 0) {
// 		out += a[i] + "_";
// 	}
// }
// document.querySelector('.out-1').innerHTML = out;





// найти максимальное либо минимальное значение

let b = [100, 2, 4, 65, 7, 97, 45, 8, 3, 2];
let max = b[0];
for (let i = 0; i < b.length; i++) {
	if (b[i] > max) {
		max = b[i];
	}
}
console.log('max: ' + max);





// найти сумму элементов массива

let b = [100, 2, 4, 65, 7, 97, 45, 8, 3, 2];
let sum = 0;
for (let i = 0; i < b.length; i++) {
	sum += b[i];
}
console.log('sum: ' + sum);