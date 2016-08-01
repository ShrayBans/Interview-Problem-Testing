//npm install mocha
var expect = require('chai').expect;
var fizzbuzz = require('../algos/fizzbuzz.js');
var appleStocks = require('../algos/apple-stocks.js');
// var balancedParens = require('../algos/balanced-parens.js');
// var binToDec = require('../algos/bin-to-dec.js');
// var drawStairs = require('../algos/draw-stairs.js');
// var highestProduct = require('../algos/highest-product.js');
// var kthToLastNode = require('../algos/kth-to-last-node.js');
// var matchWord = require('../algos/match-word.js');
// var maxStack = require('../algos/max-stack.js');
// var mergeArray = require('../algos/merge-array.js');
// var modeMean = require('../algos/mode-mean.js');
// var numToWords = require('../algos/num-to-words.js');
// var power = require('../algos/pow.js');
// var reverseInPlace = require('../algos/reverse-in-place.js');
// var reverseLL = require('../algos/reverse-linked-list.js');
// var romanNumerals = require('../algos/roman-numeral.js');
// var stringRotation = require('../algos/string-rotation.js');
// var subsetSum = require('../algos/subset-sum.js');
// var zipLL = require('../algos/zip-linked-lists.js');
var gcd = require('../algos/gcd.js');


describe('Fizzbuzz Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});
});

describe('Apple Stocks Algorithm', function(){
	it('Evaluates profit', function(){
		expect(appleStocks([4,5,3,2,5,2,9])).to.equal(7);
	});
	it('Invalid input', function(){
		expect(appleStocks(15)).to.equal(0);
	});
	it('No profit', function(){
		expect(appleStocks([4,3,2,1])).to.equal(0);
	});
});

describe('Balanced Parens Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});
});

describe('Binary to Decimal Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});
});

describe('Draw Stairs Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});
});

describe('Highest Product Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});
});

describe('Kth To Last Node Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});
});

describe('Greatest Common Denominator', function(){
	it('works for 2', function(){
		expect(gcd(10,8)).to.equal(2);
	});
	it('works for 1', function(){
		expect(gcd(10,9)).to.equal(1);
	});
	it('works for large numbers', function(){
		expect(gcd(34, 289)).to.equal(17);
	});
	it('works for 0 or undefined', function(){
		expect(gcd(15)).to.equal(0);
		expect(gcd(0, 15)).to.equal(0);
	});
});















