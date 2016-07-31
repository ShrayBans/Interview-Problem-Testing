/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 //if negative, then take two lowest numbers and the highest
	//brute force method
//O(n)
function highestProduct(array) {
	if (array.length <= 3) return array.reduce(function(curr, accum){return curr * accum; }, 1);
	var prod, prodPos;
	array.sort(function(a,b){return b-a;});
	prod = array[array.length-1] * array[array.length-2] * array[0];
	prodPos = array[0] * array[1] * array[2];
	if (prodPos > prod) return prodPos;
	return prod;
}

module.exports = highestProduct;
