let arr = [4, 7, 9];
let allP = document.querySelectorAll('p');
console.log(allP);
// console.log(allP[0]);
for (let i = 0; i < allP.length; i++) {
	console.log(allP[i]);
}

// 1 способ (получили элементы массива)
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// 2 способ (цикл for in при вызове ключей(key) вызывает ИНДЕКСЫ элементов массива)!!!!!!!!!!
for (let key in arr) {
	console.log(key); // здесь мы получили ИНДЕКСЫ элементов массива
	// console.log(arr[key]); // так мы получили элементы массива
}

// 3 способ(a) (цикл for of при вызове ключей(key) вызывает САМИ ЭЛЕМЕНТЫ массива)!!!!!!!!!!
for (let key of arr) {
	console.log(key); // здесь мы получили ЭЛЕМЕНТЫ массива
	// console.log(arr[key]); // undefined 
}
// 3 способ(b) - более правильный вариант (цикл for of при вызове ключей(key) вызывает САМИ ЭЛЕМЕНТЫ массива)!!!!!!!!!!
for (let item of arr) {
	console.log(item); // здесь мы получили ЭЛЕМЕНТЫ массива
}