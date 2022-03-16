let b = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// let out = '';
// for (let i = 0; i < b.length; i++) {
// 	for (let k = 0; k < b[i].length; k++) {
// 		console.log(b[i][k]);
// 		out += b[i][k] + ' ';
// 	}
// 	out += '<br>';
// }
// document.querySelector('.out').innerHTML = out;




let out = '';
for (let i = 0; i < b.length; i++) {
	for (let k = 0; k < b[i].length; k++) {
		console.log(b[i][k]);
		if (b[i][k] > 4) {
			out += b[i][k] + ' ';
		}
	}
	out += '<br>';
}
document.querySelector('.out').innerHTML = out;



// задача: нажимая кнопку - передвигать еденицу

let d = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
document.querySelector('.out2').innerHTML = d;
let j = 0;
document.querySelector('button').onclick = () => {
	if (j + 1 < d.length) {// продолжать до конца длины массива
		d[j] = 0;
		d[j + 1] = 1;
		j++;
	}
	document.querySelector('.out2').innerHTML = d;
}