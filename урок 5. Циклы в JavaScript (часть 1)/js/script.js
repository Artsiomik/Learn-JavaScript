// for (старт; работаем пока верно; как изменяеться счетчик ) {

// }

// for (let i = 0; i < 5; i++) {
// if (i == 3) break; // выход из цикла
// 	console.log(i);
// }
// i = 5 выходим из цикла
// работаем дальше


// let div = document.querySelectorAll('.one');
// console.log(div);
// for (let i = 0; i < div.length; i++) {

// 	console.log(div[i]);
// 	div[i].style.background = 'red';
// 	div[i].onclick = two;
// }
// function two() {
// 	console.log('work!!!!!!')
// }


document.querySelector('button').onclick = () => {
	let r = document.querySelectorAll('input[type="radio"]');
	console.log(r);
	for (let i = 0; i < r.length; i++) {
		if (r[i].checked) {
			console.log(r[i].value);
		}
	}
}

let out = ' ';
for (let i = 0; i < 10; i++) {
out += i + ' ';
// if (i == 6) break;
}
document.querySelector('#out').innerHTML = out;