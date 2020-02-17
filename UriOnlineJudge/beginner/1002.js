var input = "150.00";
var lines = input.split('\n');

// A = π . R2

let pi = 3.14159;
let raio = Number(lines.shift());
raio *= raio

console.log('A=' + (pi * raio).toFixed(4));