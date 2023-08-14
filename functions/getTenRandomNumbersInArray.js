import getRandomIntInclusive from './getRandomIntInclusive.js';

const getTenRandomNumbersInArray = () => {
  const progressionValue = getRandomIntInclusive(1, 9);
  let firstNumber = Math.round(Math.random() * 10);
  const array = [];
  for (let i = 0; i <= 9; i += 1) {
    array.push(firstNumber);
    firstNumber += progressionValue;
  }
  return array;
};
export default getTenRandomNumbersInArray;
