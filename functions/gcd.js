function gcd(a, b) {
  let aa = a;
  let bb = b;

  while (aa !== bb) {
    if (aa > bb) {
      aa -= bb;
    } else {
      bb -= aa;
    }
  }
  return `${aa}`;
}

export default gcd;
