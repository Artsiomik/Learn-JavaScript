let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
// 	for (let k = 0; k < 10; k++) {
// 		out.innerHTML += k;
// 		// out.innerHTML += '*';
// 	}
// 	// out.innerHTML += ' / ';
// 	out.innerHTML += '<br>';
// }

// for (let i = 1; i < 10; i++) {
// 	// out.innerHTML += '3*' + i + '=' + (i*3) + '<br>'; // применили КОНКАТЕНАЦИЮ
// 	out.innerHTML += `3*${i}=${3*i}<br>`; // применили ИНТЕРПОЛЯЦИЮ
// }


// пишем ТАБЛИЦУ УМНОЖЕНИЯ с помощью вложенных циклов
for (let i = 1; i < 10; i++) {
	for (let k = 1; k < 10; k++) {
	out.innerHTML += `${i}*${k}=${k*i}<br>`; // применяем ИНТЕРПОЛЯЦИЮ
	}
	out.innerHTML += '<hr>';
}

