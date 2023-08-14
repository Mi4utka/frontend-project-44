function gcd(a, b) {
  let aa = Math.abs(a);
  let bb = Math.abs(b);

  while (aa !== bb) {
    if (aa > bb) {
      aa -= bb;
    } else {
      bb -= aa;
    }
  }
  return aa;
}

export default gcd;
