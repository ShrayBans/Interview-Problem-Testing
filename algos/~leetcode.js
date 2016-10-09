//Many different easy/medium Leetcode problems

//works but bad - improve - https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
    for(var i =0; i<nums.length; i++) {
        for (var j =i+1; j<nums.length; j++) {
            if(nums[i]+nums[j]===target) return [i, j];
        }
    }
};

//works only for 3 rows - https://leetcode.com/problems/zigzag-conversion/
var zigzag = function(s, numRows) {
    var newString = '';
    for (var i = 0; i<s.length; i++) {
        console.log(s[i])
        if(i % (numRows+1) === 0) newString += s[i];
    }
     for (var i = 0; i<s.length; i++) {
        if(i % (numRows+1) === 1) newString += s[i];
        if(i % (numRows+1) === 3) newString += s[i];
    }
     for (var i = 0; i<s.length; i++) {
        if(i % (numRows+1) === 2) newString += s[i];
    }
    return newString;
    
};

//works to reverse integer - takes out 0s and restricts to 32 bit and accounts for negative
var reverse = function(x) {
    var xString = x.toString();
    var reverseString = '';
    var negative = false;
    var begin = true;
    if(xString[0] === '-') {
        xString = xString.substring(1, xString.length);
        negative = true;
    }
    
    for(var i = 0; i < xString.length; i++) {
        if(begin && xString[xString.length-1-i] === '0') begin = true;
        else {
            begin = false;
            reverseString += xString[xString.length-1-i];
        }
    }
    x = parseInt(reverseString);
    if (negative) x *= -1;
    if (Math.abs(x) > 2147483647 || !x) return 0;
    return x;
};


module.exports = {TwoSum, };
