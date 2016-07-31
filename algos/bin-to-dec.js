/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *


 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */



function binToDec(binary) {
	var binTotal = 0;
	//split into separate strings
	for (var i = 0; i < binary.length; i++) {
		//find value of each exponent and subtract the binary from each
		var eachNum = Math.pow(2, binary.length-1-i) * parseInt(binary[i]);
		//add them together
		binTotal += eachNum;
	}

	return binTotal;
}

function decToBin(decimal){
	//find whichever ever power is less than 
	var highest = highExpon(decimal);
	var pow = 0;
	var binString = "";
	for (var i = highest; i >= 0; i--) {
		
		pow = Math.pow(2, i);
		if(decimal >= pow){
			binString += "1";
			decimal -= pow;
			
		}
		else{
			binString += "0";
		}
	}
	return binString;
}

function highExpon(decimal){
	var count = 0;
	var accum = 0;
	while(accum <= decimal){
		count++;
		accum = Math.pow(2, count);
	}
	return count-1;
}

module.exports = binToDec;
