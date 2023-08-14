const makeOneMissing = (array, numberToBeMissing) => {
  Math.round(Math.random() * 9);
  const arrayCopy = [...array];
  arrayCopy[numberToBeMissing] = '..';
  return (arrayCopy.join(' '));
};
export default makeOneMissing;
