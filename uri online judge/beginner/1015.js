var input = "2.5 -0.4\n-12.2 7.0";
var lines = input.split('\n');

const numbers1 = lines.shift();
const numbers2 = lines.shift();

const numbersArray1 = numbers1.split(' ');
const numbersArray2 = numbers2.split(' ');

const x1 = Number(numbersArray1.shift());
const y1 = Number(numbersArray1.shift());
const x2 = Number(numbersArray2.shift());
const y2 = Number(numbersArray2.shift());

const distance = (((((x2 - x1) ** 2) + (y2 - y1) ** 2)) ** 0.5).toFixed(4);
   
console.log(distance);