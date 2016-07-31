/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */
//BRUTE FORCE: two for loops that push the smaller number of the two arrays 

// return arr1.concat(arr2).sort(function(a,b){ return a-b});
function mergeArrays(arr1, arr2) {
	var res = [];
	var i =0;
	var j=0;
	while(i<arr1.length && j<arr2.length){
		if(arr1[i] < arr2[j]){
			res.push(arr1[i]);
			i++;
		}
		else if(arr1[i] >= arr2[j]){
			res.push(arr2[j]);
			j++;
		}
	}
	return res;
}

module.exports = mergeArrays;
