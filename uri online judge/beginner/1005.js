var input = "10\n10";
var lines = input.split('\n');

var gradeA = Number(lines.shift()).toFixed(1);
var gradeB = Number(lines.shift()).toFixed(1);
   
console.log('MEDIA = ' + (((gradeA * 3.5) + (gradeB * 7.5)) / 11).toFixed(5));