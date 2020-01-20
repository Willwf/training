var input = "576";
var lines = input.split('\n');

const numberOfNotes = Number(lines.shift());
let banknotes = [];

for (let i = 1; i <= numberOfNotes; i++) {
    banknotes.push(i);
}

let banknotes100 = [];
for (let i = 1;i <=banknotes.length; i++) {
    if (banknotes[i] % 100 === 0) {
        banknotes100.push(i);
    }
}

let banknotes50 = [];
for (let i = 1;i <=banknotes.length; i++) {
    if (banknotes[i] % 50 === 0) {
        banknotes50.push(i);
    }
}


console.log(banknotes100.length);
console.log(banknotes50.length);
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();