/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
	var newStr = "";
	for(var i = 1; i <= n ; i++){
		for(var j = 0; j < n-i ; j++){
			newStr += " ";
		}
		for(var j = 0; j < i ; j++){
			newStr += "*";
		}
		newStr += "\n";
	}
	console.log(newStr);
}

module.exports = drawStairs;