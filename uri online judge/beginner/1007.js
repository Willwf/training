var input = "5\n6\n-7\n8";
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());
var d = Number(lines.shift());
   
console.log('DIFERENCA = ' + (a * b - c * d));