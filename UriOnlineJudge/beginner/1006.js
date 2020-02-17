var input = "10.0\n10.0\n5.0";
var lines = input.split('\n');

var gradeA = Number(lines.shift()).toFixed(1);
var gradeB = Number(lines.shift()).toFixed(1);
var gradeC = Number(lines.shift()).toFixed(1);
   
console.log('MEDIA = ' + (((gradeA * 2) + (gradeB * 3) + (gradeC * 5)) / 10).toFixed(1));