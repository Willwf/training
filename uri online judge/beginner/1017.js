var input = "22\n67";
var lines = input.split('\n');

const spentTime = lines.shift();
const averageSpeed = lines.shift();

console.log(((spentTime * averageSpeed) / 12).toFixed(3));