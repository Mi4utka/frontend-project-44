function gcd(a, b) {
  let aa = Math.abs(a);
  let bb = Math.abs(b);
  if (b > a) { const temp = aa; aa = b; bb = temp; }
  while (true) {
    if (bb === 0) return `${aa}`;
    aa %= bb;
    if (aa === 0) return `${bb}`;
    bb %= aa;
  }
}
export default gcd;
