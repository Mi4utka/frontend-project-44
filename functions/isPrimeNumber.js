const isPrimeNumber = (numb) => {
  const arr = [];
  for (let i = 0; i <= numb; i += 1) {
    if (numb % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 2) {
    return 'yes';
  }

  return 'no';
};

export default isPrimeNumber;
