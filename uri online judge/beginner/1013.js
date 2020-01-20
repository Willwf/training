var input = "7 14 106";
var lines = input.split('\n');

const numbers = lines.shift();
const numbersArray = numbers.split(' ');
const numberA = Number(numbersArray.shift());
const numberB = Number(numbersArray.shift());
const numberC = Number(numbersArray.shift());

const maiorAB = ((numberA + numberB + Math.abs(numberA - numberB)) / 2);
const maiorABC = ((maiorAB + numberC + Math.abs(maiorAB - numberC)) / 2);
   
console.log(maiorABC + ' eh o maior');