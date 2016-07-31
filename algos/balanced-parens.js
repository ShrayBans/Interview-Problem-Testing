/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
	//can loop through twice and count each of them and return true if they equal each other ---WRONG
	//pushes to an array, and pops when its finds it, loops 1 time
	//checks at the end to see if there


function balancedParens(input){
	var newArr = [];
	for (var i = 0; i < input.length; i++) {
		if(input[i] === "{" || input[i] ==="[" || input[i] ==="(" ) newArr.push(input[i]);
		if(input[i] === "}" || input[i] ==="]" || input[i] ===")" ) {
			reversed = reverseBracket(input[i]);
			if (newArr[newArr.length-1] === reversed) newArr.pop();
			else return false;
		}
	}
	return (newArr.length === 0) ? true: false;

}

function reverseBracket(bracket){
	if (bracket === ")") return "(";
	else if (bracket === "]") return "[";
	else if (bracket === "}") return "{";
}

module.exports = balancedParens;
