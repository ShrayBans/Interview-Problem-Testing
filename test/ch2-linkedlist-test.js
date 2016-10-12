var reverseLinkedList = require('../algos/ch2-linkedlist/reverse-linked-list.js').reverseLinkedList;
var zipLL = require('../algos/ch2-linkedlist/zip-linked-lists.js');
var kthToLastNode = require('../algos/ch2-linkedlist/kth-to-last-node.js');

var expect = require('chai').expect;



function Node(val) {
  this.value = val;
  this.next = null;
}

function LinkedList() {
	this.head = null;
	this.tail = null;
	this.push = function(value) {
		var node = new Node(value);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	};
}

describe('Linked List Algorithms', function(){

		var L1 = new LinkedList();
		var L2 = new LinkedList();
		var L3 = new LinkedList();

	describe('Reverse Linked List', function(){
		L1.push(1);
		L1.push(2);
		L1.push(3);
		L3.push(3);
		L3.push(2);
		L3.push(1);

		it('Simple Case', function(){
			expect(reverseLinkedList(L1.head)).to.eql(L3.head);
		});
	});

	xdescribe('Zip Linked List', function(){
		it('Simple Case', function(){
			expect(zipLL(2)).to.equal(2);
		});
		it('Larger case', function(){
			expect(zipLL(10)).to.equal(274);
		});
	});

	xdescribe('Kth To Last Node', function(){
		it('Simple Case', function(){
			expect(kthToLastNode(2)).to.equal(2);
		});
		it('Larger case', function(){
			expect(kthToLastNode(10)).to.equal(274);
		});
	});
});

