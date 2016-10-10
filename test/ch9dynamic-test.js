//npm install mocha
var expect = require('chai').expect;
var Ch9 = require('../algos/ch9dynamic.js');

describe('Problem 1 - Walk Stairs', function(){
	it('Simple Case', function(){
		expect(Ch9.walkStairs(2)).to.equal(2);
	});
	it('Larger case', function(){
		expect(Ch9.walkStairs(10)).to.equal(274);
	});
});