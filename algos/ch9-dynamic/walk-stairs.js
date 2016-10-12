function walkStairs(n) {
	var cache = {};
	return recursive(n);

	function recursive(n) {
		if(n < 0) return 0;
		else if (n === 0) return 1;
		else if (cache[n]) return cache[n];
		else {
			cache[n] = walkStairs(n-1) + walkStairs(n-2) + walkStairs(n-3);
			return cache[n];
		}
	}
}

module.exports = walkStairs;