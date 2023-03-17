const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuacao = (answer, i) => {
 let point = 0;
 answer === 'N.A' ? point += 1 : answer === RIGHT_ANSWERS[i] ? point += 0 : point += 1.5;
 return point;
};

const totalPoints = () => {
  let total = RIGHT_ANSWERS.length;
  
  STUDENT_ANSWERS.forEach((answer, i) => {
    const decresce = pontuacao(answer, i);
    total -= decresce;
  });
  return total;
};

console.log(totalPoints());
