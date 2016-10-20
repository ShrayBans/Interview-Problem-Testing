//npm install mocha
var expect = require('chai').expect;
var mergeSort = require('../algos/ch10-sorting/merge-sort.js');
var bubbleSort = require('../algos/ch10-sorting/bubble-sort.js');
var insertionSort = require('../algos/ch10-sorting/insertion-sort.js');
var quickSort = require('../algos/ch10-sorting/quick-sort.js');

describe('Bubble Sort', function(){
	it('Basic Case', function(){
		expect(bubbleSort([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(bubbleSort([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});

describe('Merge Sort', function(){
	it('Basic Case', function(){
		expect(mergeSort([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(mergeSort([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});

xdescribe('Quick Sort', function(){
	it('Basic Case', function(){
		expect(quickSort([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(quickSort([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});

xdescribe('Insertion Sort', function(){
	it('Basic Case', function(){
		expect(insertionSort([1,2,3,4,6,5])).to.eql([1,2,3,4,5,6]);
	});
	it('Larger case', function(){
		expect(insertionSort([5,1,36,34,14,23])).to.eql([1,5,14,23,34,36]);
	});
});