// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

//split characters by punctuation or space AND split

//case insensitive

//IF()()fi[]
//go through string and if its character, add it to tempString
//if its not a character, add reversed tempString to array and if bracket, add reversed bracket to array after

//if the next character equals last one added to array, then remove from array
//if array at the end is empty, return true ; else false



//WORKS FOR ALL COMBINATIONS OF WORDS AND PARENTHESES
function matchWord(str) {
	str = str.toLowerCase();
	var testArray = [];
	var tempString = "";
	var testString = "";
	for (var i = 0; i < str.length; i++) {
	
		//add to tempString
		if(str[i].match(/[a-z})\](\[{]/)){
			// console.log(str[i])
			tempString += str[i];
		}
				

		if(str[i+1]===undefined || !str[i+1].match(/[a-z]/) || tempString.match(/[)\](\[{]/) ){
			console.log(testArray)	
			// console.log(tempString)
			// console.log(testArray)
			//reverse the string
			testString = reverseStr(tempString);
			console.log(testString)
			//if reversed string equals the last, then pop the last
			if(testString === testArray[testArray.length-1]) {
				testArray.pop();
				testString = "";
				tempString = "";
			}
			//else add it to the end
			else {
				if(tempString.length > 0 ){
				testArray.push(tempString);
				tempString = "";
				testString = "";
				}
			}
		}
	}

	if (testArray.length === 0) return true;
	else return false;
}

function reverseStr(string){
	var reversed ="";
	switch(string){
		case '}':
			reversed = '{';
			break;
		case ')':
			reversed = '(';
			break;
		case ']':
			reversed = '[';
			break;
		default:
			reversed = string.split('').reverse().join('');
	}
	return reversed;
}

matchWord('%%$@$while  try!yrt  for if_fi rof #*#  elihw')

module.exports = matchWord;


