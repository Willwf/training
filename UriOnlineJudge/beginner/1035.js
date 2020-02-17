var input = "10 33 27 43";
var lines = input.split('\n');

var numbers = input.split(' ');

const a = numbers.shift();
const b = numbers.shift();
const c = numbers.shift();
const d = numbers.shift();

if (
    (
        (b > c) && (d > a)
    ) && (
        (c + d) > (a + b)
    ) && (
        Math.sign(c) === 1
    ) && (
        Math.sign(d) === 1
    ) && (
        a % 2 === 0
    )
) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}