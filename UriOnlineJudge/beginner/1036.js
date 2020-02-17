var input = "0.0 6.3 5.4";
var lines = input.split('\n');

var numbers = input.split(' ');

const a = Number(numbers.shift());
const b = Number(numbers.shift());
const c = Number(numbers.shift());


function BhaskaraFormula(a, b, c) {

  const delta = (b ** 2) - (4 * a * c);
  const raizDelta = delta ** 0.5;
  const x1 = (-(b) + (raizDelta)) / (2 * a);
  const x2 = (-(b) - (raizDelta)) / (2 * a);

  if (delta < 0) return console.log('Impossivel calcular');
  if (a === 0) return console.log('Impossivel calcular');
  return console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`);

}

BhaskaraFormula(a, b, c);
