var input = "2 3";
var lines = input.split('\n');

const numbers = input.split(' ');

const x = numbers.shift();
const y = numbers.shift();

const menu = [
  { code: 1, specification: 'Cachorro Quente', price: 4.00 },
  { code: 2, specification: 'X-Salada', price: 4.50 },
  { code: 3, specification: 'X-Bacon', price: 5.00 },
  { code: 4, specification: 'Torrada Simples', price: 2.00 },
  { code: 5, specification: 'Refrigerante', price: 1.50 }
]

function order(x, y) {

  const indice = x - 1;
  const totalPreço = menu[indice].price * y;
  return console.log('Total: R$ ' + totalPreço.toFixed(2)); 

}

order(x, y);