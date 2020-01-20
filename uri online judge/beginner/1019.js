var input = "140153";
var lines = input.split('\n');

const secondsofEvent = lines.shift();

const hours = Math.floor(secondsofEvent / 3600);
let rest = secondsofEvent % 3600;
const minutes = Math.floor(rest / 60);
const seconds = rest % 60;

console.log(`${hours}:${minutes}:${seconds}`);