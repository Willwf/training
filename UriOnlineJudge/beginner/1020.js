var input = "400";
var lines = input.split('\n');

const ageInDays = Number(lines.shift());

const years = Math.floor(ageInDays / 365);
let rest = ageInDays % 365;

const months = Math.floor(rest / 30);

const days = rest - (months * 30);

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);