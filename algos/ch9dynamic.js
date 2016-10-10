function walkStairs(n) {
	var array = [];
	recursive(0, [])
	
	function recursive(current, pathArray) {
		if(current === n) array.push(pathArray)
		if(current >= n) return;
		
		return recursive(current+1, pathArray.concat([1])) || recursive(current+2, pathArray.concat([2])) || recursive(current+3, pathArray.concat([3]));
	}

	return array.length;
}

module.exports = {
	walkStairs: walkStairs,
};