// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
	num = num.toString();
	if (num == 0) return 'zero';
	var zeros = ['','thousand', 'million', 'trillion', 'quadrillion'];
	// var nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var finalString = '';
	var tempString = '';
	var totalCount = Math.ceil(num.length / 3)
	// var firstNum;
	//split into sets of 3
	//start at the end and add word for every set of three and then call numToHundreds
	for(var i = 0; i<totalCount ; i++){
		tempString = num.substring(3*(totalCount-i)-3,3*(totalCount-i));
		// firstNum = parseInt(tempString[0])
		// nums[firstNum-1] +
		finalString = zeros[i]+ numToHundreds(tempString) + finalString;
	}

	return finalString;
}

numToWords(435425555)

function numToHundreds(numString){
	var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var finalString = '';
	if (numString.length === 1)
	if (numString.length === 2)
	if (numString.length === 3) {
		firstNum = parseInt(tempString[0])
		finalString = numbers[firstNum-1] + 'hundred' + 
	}
}

module.exports = numToWords;
