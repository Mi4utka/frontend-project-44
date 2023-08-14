function doMath(x, znak, y) {
  let math = 0;
  switch (znak) {
    case '+':
      math = x + y;
      break;

    case '-':
      math = x - y;
      break;

    case '*':
      math = x * y;
      break;
    default:
  }
  return `${math}`;
}
export default doMath;
