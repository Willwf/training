var input = "1 1 15.10\n2 1 15.10";
var lines = input.split('\n');

var product1 = lines.shift(); 
var product2 = lines.shift();

var product1array = product1.split(" ");
var product2array = product2.split(" ");

var productCode1 = Number(product1array.shift());
var units1 = Number(product1array.shift());
var price1 = Number(product1array.shift()).toFixed(2);

var productCode2 = Number(product2array.shift());
var units2 = Number(product2array.shift());
var price2 = Number(product2array.shift()).toFixed(2);
   
console.log('VALOR A PAGAR: R$ ' + ((units1 * price1) + (units2 * price2)).toFixed(2));