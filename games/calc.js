import readlineSync from 'readline-sync';
import getRandom from '../functions/get_random.js';
import doMath from '../functions/doMath.js';

const operator = ['*', '+', '-'];
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const calcGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let currentFirstNumb = getRandom(numb);
  let currentOperator = getRandom(operator);
  let currentSecondNumb = getRandom(numb);
  const answer1 = readlineSync.question(`What is the result of the expression?\nQuestion: ${currentFirstNumb} ${currentOperator} ${currentSecondNumb}\nYour answer: `);
  if (answer1 === doMath(currentFirstNumb, currentOperator, currentSecondNumb)) {
    currentFirstNumb = getRandom(numb);
    currentOperator = getRandom(operator);
    currentSecondNumb = getRandom(numb);
    const answer2 = readlineSync.question(`Correct!\nQuestion: ${currentFirstNumb} ${currentOperator} ${currentSecondNumb}\nYour answer: `);
    if (answer2 === doMath(currentFirstNumb, currentOperator, currentSecondNumb)) {
      currentFirstNumb = getRandom(numb);
      currentOperator = getRandom(operator);
      currentSecondNumb = getRandom(numb);
      const answer3 = readlineSync.question(`Correct!\nQuestion: ${currentFirstNumb} ${currentOperator} ${currentSecondNumb}\nYour answer: `);
      if (answer3 === doMath(currentFirstNumb, currentOperator, currentSecondNumb)) {
        console.log(`Correct!\nCongratulations, ${userName}!`);
      } else {
        console.log(`'${answer3}' is wrong answer ;(. Correct answer was '${doMath(currentFirstNumb, currentOperator, currentSecondNumb)}'.\nLet's try again, ${userName}!`);
      }
    } else {
      console.log(`'${answer2}' is wrong answer ;(. Correct answer was '${doMath(currentFirstNumb, currentOperator, currentSecondNumb)}'.\nLet's try again, ${userName}!`);
    }
  } else {
    console.log(`'${answer1}' is wrong answer ;(. Correct answer was '${doMath(currentFirstNumb, currentOperator, currentSecondNumb)}'.\nLet's try again, ${userName}!`);
  }
};

export default calcGame;
