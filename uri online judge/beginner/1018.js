var input = "228";
var lines = input.split('\n');

const numberOfNotes = Number(lines.shift());

const banknote100 = Math.floor(numberOfNotes / 100);
let rest = numberOfNotes % 100;
const banknote50 = Math.floor(rest / 50);
rest = rest % 50;
const banknote20 = Math.floor(rest / 20);
rest = rest % 20;
const banknote10 = Math.floor(rest / 10);
rest = rest % 10;
const banknote5 = Math.floor(rest / 5);
rest = rest % 5;
const banknote2 = Math.floor(rest / 2);
rest = rest % 2;
const banknote1 = Math.floor(rest / 1);

console.log(numberOfNotes);
console.log(banknote100 + ' nota(s) de R$ 100,00');
console.log(banknote50 + ' nota(s) de R$ 50,00');
console.log(banknote20 + ' nota(s) de R$ 20,00');
console.log(banknote10 + ' nota(s) de R$ 10,00');
console.log(banknote5 + ' nota(s) de R$ 5,00');
console.log(banknote2 + ' nota(s) de R$ 2,00');
console.log(banknote1 + ' nota(s) de R$ 1,00');