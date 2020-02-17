var input = "125.02";
var lines = input.split('\n');

var number = lines.shift();

if (number < 0) {
  console.log('Fora de intervalo');
} else if (number <= 25) {
  console.log('Intervalo [0,25]');
} else if (number <= 50) {
  console.log('Intervalo (25,50]');
} else if (number <= 75) {
  console.log('Intervalo (50,75]');
} else if (number <= 100) {
  console.log('Intervalo (75,100]');
} else {
  console.log('Fora de intervalo');
}