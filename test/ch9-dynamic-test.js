//npm install mocha
var expect = require('chai').expect;
var walkStairs = require('../algos/ch9-dynamic/walk-stairs');
var robotWalk = require('../algos/ch9-dynamic/robot-walk');
var coinSum = require('../algos/ch9-dynamic/coin-sum');
var rockPaperScissors = require('../algos/ch9-dynamic/rock-paper-scissors');

describe('Problem 1 - Walk Stairs', function(){
	it('Simple Case', function(){
		expect(walkStairs(2)).to.equal(2);
	});
	it('Larger case', function(){
		expect(walkStairs(10)).to.equal(274);
	});
});

xdescribe('Problem 2 - Robot Walk', function(){
	it('Simple Case', function(){
		expect(robotWalk(2)).to.equal(2);
	});
	it('Larger case', function(){
		expect(robotWalk(10)).to.equal(274);
	});
});

xdescribe('Problem 2 - Robot Walk', function(){
	it('Simple Case', function(){
		expect(coinSum(2)).to.equal(2);
	});
	it('Larger case', function(){
		expect(coinSum(10)).to.equal(274);
	});
});

xdescribe('Problem 2 - Robot Walk', function(){
	it('Simple Case', function(){
		expect(rockPaperScissors(2)).to.equal(2);
	});
	it('Larger case', function(){
		expect(rockPaperScissors(10)).to.equal(274);
	});
});