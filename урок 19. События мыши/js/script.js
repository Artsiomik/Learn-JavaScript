
document.querySelector('.one').onclick = function (event) {
	console.log(event);
	console.log('click');
}

document.querySelector('.two').onclick = function () {
	console.log('click2');
}

document.querySelector('.two').ondblclick = function () {
	console.log('double');
}

document.querySelector('.two').oncontextmenu = function () {
	console.log('right button');
	return false;
}

// let w = 75;
// document.querySelector('.three').onmousemove = function () {
// 	document.querySelector('.three').style.width = w + 'px';
// 	w++;
// }

document.querySelector('.three').onmouseenter = function () {
	document.querySelector('.three').style.background = 'red';
}
document.querySelector('.three').onmouseleave = function () {
	document.querySelector('.three').style.background = 'green';
}
document.querySelector('.three').onmousedown = function () {
	document.querySelector('.three').style.background = 'orange';
}
document.querySelector('.three').onmouseup = function () {
	document.querySelector('.three').style.background = 'blue';
}


let p = 10;
document.querySelector('button').onclick = function (event) {
	p++;
	document.querySelector('progress').value = p;
}