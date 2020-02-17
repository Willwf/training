var input = "12.7 10.4 15.2";
var lines = input.split('\n');

const numbers = lines.shift();
const numbersArray = numbers.split(' ');
const numberA = Number(numbersArray.shift());
const numberB = Number(numbersArray.shift());
const numberC = Number(numbersArray.shift());
const pi = 3.14159;
   
console.log('TRIANGULO: ' + (0.5 * numberA * numberC).toFixed(3));
console.log('CIRCULO: ' + (pi * (numberC ** 2)).toFixed(3));
console.log('TRAPEZIO: ' + ((0.5 * (numberA + numberB)) * numberC).toFixed(3));
console.log('QUADRADO: ' + (numberB ** 2).toFixed(3));
console.log('RETANGULO: ' + (numberA * numberB).toFixed(3));