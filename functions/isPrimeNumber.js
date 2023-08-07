const isPrimeNumber = (numb) => {
  let arr  = []
  for (let i = 0; i <= numb; i += 1) {
    if ( numb % i === 0) { 
      arr.push(i)}
  }
    return arr.length === 2 
}
