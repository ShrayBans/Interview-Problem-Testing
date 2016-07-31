/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
//input: array (pos or neg numbers), target number (positive or negative)
//output: true, false


function subsetSum(arr, target) {
	//make an array of all combinations
    var combArray = [[]];
    for (var i=0; i < arr.length; i++) {
        for (var j = 0, len = combArray.length; j < len; j++) {
            combArray.push(combArray[j].concat(arr[i]));
        }
    }

    //take off empty array
    combArray.shift();

    //find sum of all arrays
    for(var i = 0; i<combArray.length; i++){
    	var total = combArray[i].reduce(function(curr, next){
    		return curr + next;
    	});
    	if (total === target) return true;
    }
    return false;
}

module.exports = subsetSum;
