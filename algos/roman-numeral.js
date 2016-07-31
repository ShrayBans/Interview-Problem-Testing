/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * I, V, X, L, C, D, M
 * 1, 5, 10, 50, 100, 500, 1000
 */

function romanNumeral(n) {
	var resString = "";
	n = n.toString();

	//break it into strings
	var ones = parseInt(n[n.length-1]);
	var tens = parseInt(n[n.length-2]);
	var hundreds = parseInt(n[n.length-3]);
	var thousands =  parseInt(n[n.length-4]);
	var numArray = [thousands, hundreds, tens, ones];

	//take each and add letters based on numbers
	for (var i = 0, j=0; i < numArray.length; i++) {
		var numerals = ["M", "D", "C", "L", "X", "V", "I"];
		if(numArray[i] ===0 || numArray[i] === undefined) resString += "";
		else if(numArray[i] <4) resString += numerals[j].repeat(numArray[i]);
		else if(numArray[i] ===4) resString += numerals[j]+ numerals[j-1]; //adds 4
		else if(numArray[i] >4 && numArray[i] < 9 ) resString += numerals[j-1]+ numerals[j].repeat(numArray[i]-5);
		else if(numArray[i] ===9) resString += numerals[j]+ numerals[j-2]; 
		j +=2;
	}
	return resString;

}

module.exports = romanNumeral;
