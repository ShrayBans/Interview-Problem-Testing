//npm install mocha
var expect = require('chai').expect;
var Sort = require('../algos/~sorting.js');

describe('Bubble Sort', function(){
	it('Basic Case', function(){
		expect(Sort.bubble([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(Sort.bubble([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});

xdescribe('Merge Sort', function(){
	it('Basic Case', function(){
		expect(Sort.merge([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(Sort.merge([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});

xdescribe('Quick Sort', function(){
	it('Basic Case', function(){
		expect(Sort.quick([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(Sort.quick([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});

xdescribe('Insertion Sort', function(){
	it('Basic Case', function(){
		expect(Sort.insert([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(Sort.insert([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});