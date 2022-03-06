// let a = 6;

// if (a > 9) {
// 	// true
// 	console.log('Yes!');
// }
// else {
// 	console.log('else');
// }


const button = document.querySelector('button'); // элемент который не изменяется можно помещать в константу
const input = document.querySelector('.age');

button.onclick = () => {
	// это стрелочная фунция, которая идентична записи button.onclick = function () {}
	let num = +input.value;
	if (num >= 16 && num < 60) {
		console.log('Welcom!');
	}
	else if (num > 60) {
		console.log('Ты точно сюда?))');
	}
	else {
		console.log('Ты не пройдёшь!');
	}


	switch (num) {
		case 15:
			console.log('Ещё годик потерпи!');
			break;
		case 16:
			console.log('Урааа можно!');
			break;
	}
}