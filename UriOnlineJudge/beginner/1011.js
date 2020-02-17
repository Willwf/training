var input = "1523";
var lines = input.split('\n');

const radius = lines.shift();
const pi = 3.14159
   
console.log('VOLUME = ' + ((4 / 3.0) * pi * (radius ** 3)).toFixed(3));