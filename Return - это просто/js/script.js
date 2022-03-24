
// let a = 9;
// function f1() {
// 	document.querySelector('.out-1').textContent = a;
// }
// document.querySelector('button').onclick = f1;


// это более гибкая запись того что сверху 
// function f1(b) {
// 	document.querySelector('.out-1').textContent = b;
// }
// document.querySelector('button').onclick = () => {
// 	f1(23);
// }



// вот еще лучше вариант!!!

function f1(b) {
	return 100 * b;
}
document.querySelector('button').onclick = () => {
	console.log(f1(23)); // 2300
	document.querySelector('.out-1').textContent = f1(14); // 1400
}
