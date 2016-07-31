/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

	var numObj = {};
	var modes = [];

	array.forEach(function(item){
		if(numObj.hasOwnProperty(item)===false) numObj[item] =1;
		else numObj[item] = numObj[item]+1;
	});

	var greatestFreq = 0;
	for(var prop in numObj){
		if (greatestFreq < numObj[prop]) greatestFreq = numObj[prop];
	}

	for(var key in numObj){
		if(numObj[key]===greatestFreq) modes.push(key);
	}

	var maxedMode = Math.max.apply(null, modes);

	var mean = array.reduce(function(accum, curr){
		return accum+curr;
	}, 0)/array.length;

	var flooredMean = Math.floor(mean);

	if (maxedMode === flooredMean) return true;
	else return false;
}

module.exports = modemean;
