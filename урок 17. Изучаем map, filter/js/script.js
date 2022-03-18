
let a = [51, -268, 38, -45, 996, -764, 652, -997, 450, 100, -66];

// map -  возвращает такой же массив как и был изначально по количеству элементов!!!

let b = a.map(function (item, index) {
	console.log(item);
	return item;
})
console.log(b);

// let b = a.map(function (item, index) {
// 	console.log(index);
// 	return index;
// })
// console.log(b);

// допустим нужно КАЖДЫЙ элемент массива умножить(*) на 5

// let q = a.map(function(item, index){ // записана как обычная функция
// 	return item * 5
// });
let q = a.map((item, index) => { // тоже самое но записана как стрелочная функция
	return item * 5
});
console.log(q);


// filter - возвращает массив с нужным количеством элементов, которые подходят по уловию!!!!

let c = a.filter(function (item, index) {
	if (item % 2 == 0) {
		return true;
	}
})
console.log(c);