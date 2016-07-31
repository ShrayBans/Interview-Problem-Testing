/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	//fails if not the same length
	if(s1.length !== s2.length) return false;
	//split into arrays so I could sort and then put back together
	s1 = s1.split("");
	s2 = s2.split("");
	s1.sort();
	s2.sort();
	s1 = s1.join("");
	s2 = s2.join("");
	//checks to see if its a substring and returns true/false
	return isSubstring(s1, s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
