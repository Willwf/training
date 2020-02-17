var input = "6\n145\n15.55";
var lines = input.split('\n');

var employeeNumber = Number(lines.shift());
var workedHours = Number(lines.shift());
var dolarPerHour = Number(lines.shift());
   
console.log('NUMBER = ' + employeeNumber);
console.log('SALARY = U$ ' + (workedHours * dolarPerHour).toFixed(2));