/* global xdescribe describe it */
const expect = require('chai').expect;
const fizzbuzz = require('../algos/fizzbuzz.js');
const appleStocks = require('../algos/apple-stocks.js');
// var balancedParens = require('../algos/balanced-parens.js');
// var binToDec = require('../algos/bin-to-dec.js');
const drawStairs = require('../algos/draw-stairs.js');
// var highestProduct = require('../algos/highest-product.js');
// var matchWord = require('../algos/match-word.js');
const Stack = require('../algos/max-stack.js');
// var mergeArray = require('../algos/merge-array.js');
// var modeMean = require('../algos/mode-mean.js');
// var numToWords = require('../algos/num-to-words.js');
const pow = require('../algos/pow.js');
// var reverseInPlace = require('../algos/reverse-in-place.js');
// var romanNumerals = require('../algos/roman-numeral.js');
// var stringRotation = require('../algos/string-rotation.js');
const subsetSum = require('../algos/subset-sum.js');
const gcd = require('../algos/gcd.js');


describe('Fizzbuzz Algorithm', () => {
  it('Fizz', () => {
    expect(fizzbuzz(15)[2]).to.equal('fizz');
  });
  it('Buzz', () => {
    expect(fizzbuzz(15)[4]).to.equal('buzz');
  });
  it('Fizzbuzz at Large Numbers', () => {
    expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
  });
});

describe('Apple Stocks Algorithm', () => {
  it('Evaluates profit', () => {
    expect(appleStocks([4, 5, 3, 2, 5, 2, 9])).to.equal(7);
  });
  it('Invalid input', () => {
    expect(appleStocks(15)).to.equal(0);
  });
  it('No profit', () => {
    expect(appleStocks([4, 3, 2, 1])).to.equal(0);
  });
});

describe('Draw Stairs Algorithm', () => {
  it('drawStairs at 1', () => {
    expect(drawStairs(1)).to.equal('*\n');
  });
  it('drawStairs at small numbers', () => {
    expect(drawStairs(5)).to.equal('    *\n   **\n  ***\n ****\n*****\n');
  });
});

describe('Greatest Common Denominator', () => {
  it('works for 2', () => {
    expect(gcd(10, 8)).to.equal(2);
  });
  it('works for 1', () => {
    expect(gcd(10, 9)).to.equal(1);
  });
  it('works for large numbers', () => {
    expect(gcd(34, 289)).to.equal(17);
  });
  it('works for 0 or undefined', () => {
    expect(gcd(15)).to.equal(0);
    expect(gcd(0, 15)).to.equal(0);
  });
});

describe('Pow using recursion', () => {
  it('Small Calculations', () => {
    expect(pow(5, 2)).to.equal(25);
  });
  it('Large numbers', () => {
    expect(pow(173, 3)).to.equal(5177717);
  });
  it('1 Input only', () => {
    expect(pow(5)).to.equal(1);
  });
  it('Invalid Input', () => {
    expect(pow()).to.equal(1);
  });
});

describe('Stack w/ push, pop, getMax', () => {
  const stack = new Stack();
  it('Is Empty', () => {
    expect(stack.length).to.equal(0);
    expect(stack.isEmpty()).to.equal(true);
  });
  it('push', () => {
    stack.push(1);
    expect(stack.storage).to.eql([1]);
    expect(stack.length).to.equal(1);
    stack.push(2);
    expect(stack.storage).to.eql([1, 2]);
    expect(stack.length).to.equal(2);
  });
  it('pop', () => {
    stack.pop();
    expect(stack.length).to.equal(1);
    expect(stack.storage).to.eql([1]);
  });
  it('Get Max', () => {
    expect(stack.getMax()).to.equal(1);
    stack.push(5);
    stack.push(2);
    expect(stack.getMax()).to.equal(5);
  });
});

describe('Subset Sum', () => {
  it('Basic Case', () => {
    expect(subsetSum([3, 7, 4, 2], 5)).to.equal(true);
  });
  it('Larger case', () => {
    expect(subsetSum([3, 34, 4, 12, 5, 12], 32)).to.equal(true);
  });
  it('Invalid Case', () => {
    expect(subsetSum([8, 2, 4, 12], 13)).to.equal(false);
  });
  it('Negative Number Case', () => {
    expect(subsetSum([8, -2, 1, -3], 6)).to.equal(true);
  });
});
