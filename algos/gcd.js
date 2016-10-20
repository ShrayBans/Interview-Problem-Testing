/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  if (!a || !b) return 0;
  let prod = 1;
  let i = 2;
  while (i < Math.max(a, b)) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      prod *= i;
    } else i += 1;
  }
  return prod;
}

module.exports = gcd;
