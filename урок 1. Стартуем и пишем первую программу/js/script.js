console.log('Hello!');
console.log('world');
console.log('Hello ' + 'world!'); // сложение строк называется КОНКАТЕНАЦИЯ

document.getElementById('out').innerHTML = '<b>989</b>';

document.querySelector('.header').innerHTML = 15;
document.querySelector('#one').innerHTML = 777;

let a = document.querySelector('.header'); // внутри переменной я получил параграф
let c; // объявление переменной 
c = document.querySelector('#one'); // присвоение переменной параграфа

a.innerHTML = 999999;
c.innerHTML = 9287498;