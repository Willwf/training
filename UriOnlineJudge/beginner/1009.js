var input = "MANGOJATA\n1700.00\n1230.50";
var lines = input.split('\n');

var employeeFirstName = lines.shift();
var sellerSalary = Number(lines.shift());
var totalSold = Number(lines.shift());
   
console.log('TOTAL = R$ ' + ((totalSold * 0.15) + sellerSalary).toFixed(2));