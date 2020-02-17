var input = "4\n1 / 2 + 3 / 4\n1 / 2 - 3 / 4\n2 / 3 * 6 / 6\n1 / 2 / 3 / 4";
var lines = input.split('\n');

const amountOfTests = lines.shift();
console.log(amountOfTests);

let expressions = [];

for (let i = 0; i < amountOfTests; i++) {
    const expression1 = lines.shift().split(' ');
    expressions = expression1.push()
    
}

console.log(expressions);

// const expression1 = lines.shift().split(' ');
// const expression2 = lines.shift().split(' ');
// const expression3 = lines.shift().split(' ');
// const expression4 = lines.shift().split(' ');
// console.log(expression1);
// console.log(expression2);
// console.log(expression3);
// console.log(expression4);

// while (amountOfTests) {
    
// }