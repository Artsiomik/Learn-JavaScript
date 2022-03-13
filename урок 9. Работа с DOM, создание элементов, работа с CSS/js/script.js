const one = document.querySelector('.one');
one.style.width = '150px';
one.style.paddingBottom = '50px';

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
	this.classList.toggle('three');
}

// атрибуты data 

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
	gas[i].onclick = function () {
		let gallons = document.querySelector('.gallons').value;
		let amount = this.getAttribute('data');
		console.log(gallons * amount);
	}
}

let a = document.createElement('div');
a.innerHTML = 'Hello!';
a.classList.add('one');
a.onclick = function () {
alert ("hello");
}
document.querySelector('.test').appendChild(a);

console.log(a);

