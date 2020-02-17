var input = "4554\n464.6";
var lines = input.split('\n');

const distanceTraveled = lines.shift();
const fuelSpent = lines.shift();
   
console.log((distanceTraveled / fuelSpent).toFixed(3) + ' km/l');