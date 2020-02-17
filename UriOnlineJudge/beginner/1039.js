var input = "10.0 0.0 10.0 0.0\n3.9";
var lines = input.split('\n');

const scores1 = lines.shift();
const exameScore = Number(lines.shift());

const scoresArray = scores1.split(' ');

const scoreA = Number(scoresArray.shift()).toFixed(1);
const scoreB = Number(scoresArray.shift()).toFixed(1);
const scoreC = Number(scoresArray.shift()).toFixed(1);
const scoreD = Number(scoresArray.shift()).toFixed(1);

const average1 = Number((
  (((scoreA * 2) +
    (scoreB * 3) +
    (scoreC * 4) +
    (scoreD * 1)) / 10).toFixed(1)));

console.log('Media: ' + average1);
if (average1 < 5) {
  console.log('Aluno reprovado.');
} else if (5.0 <= average1 && average1 < 7.0) {
  console.log('Aluno em exame.')
  console.log(`Nota do exame: ${exameScore}`)

  const averageFinal = ((average1 + exameScore) / 2).toFixed(1);

  if (averageFinal >= 5) {
    console.log('Aluno aprovado.');
    console.log(`Media final: ${averageFinal}`);
  } else {
    console.log('Aluno reprovado.');
    console.log(`Media final: ${averageFinal}`);
  }
} else {
  console.log('Aluno aprovado.');
}