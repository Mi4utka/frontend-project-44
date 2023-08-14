import readlineSync from 'readline-sync';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};
const randomNumber1 = Math.round(Math.random() * 10);
const randomNumber2 = Math.round(Math.random() * 10);
const randomNumber3 = Math.round(Math.random() * 10);

const brainev = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const answer1 = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber1}\nYour answer: `);
  if (answer1 === isEvenNumber(randomNumber1)) {
    const answer2 = readlineSync.question(`Correct!\nQuestion: ${randomNumber2}\nYour answer: `);
    if (answer2 === isEvenNumber(randomNumber2)) {
      const answer3 = readlineSync.question(`Correct!\nQuestion: ${randomNumber3}\nYour answer: `);
      if (answer3 === isEvenNumber(randomNumber3)) {
        console.log(`Correct!\nCongratulations, ${userName}!`);
      } else {
        console.log(`'${answer3}' is wrong answer ;(. Correct answer was '${isEvenNumber(randomNumber3)}'.\nLet's try again, ${userName}!`);
      }
    } else {
      console.log(`'${answer2}' is wrong answer ;(. Correct answer was '${isEvenNumber(randomNumber2)}'.\nLet's try again, ${userName}!`);
    }
  } else {
    console.log(`'${answer1}' is wrong answer ;(. Correct answer was '${isEvenNumber(randomNumber1)}'.\nLet's try again, ${userName}!`);
  }
};

export default brainev;
