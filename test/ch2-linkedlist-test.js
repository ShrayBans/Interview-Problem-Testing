/* global xdescribe describe it */

const reverseLinkedList = require('../algos/ch2-linkedlist/reverse-linked-list.js').reverseLinkedList;
const zipLL = require('../algos/ch2-linkedlist/zip-linked-lists.js');
const kthToLastNode = require('../algos/ch2-linkedlist/kth-to-last-node.js');
const isPalindrome = require('../algos/ch2-linkedlist/linkedlist-palindrome.js');

const expect = require('chai').expect;

function Node(val) {
  this.value = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.push = (value) => {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };
}

describe('Linked List Algorithms', () => {
  describe('Reverse Linked List', () => {
    const forward = new LinkedList();
    forward.push(1);
    forward.push(2);
    forward.push(3);
    forward.push(4);
    forward.push(5);
    const reversed = new LinkedList();
    reversed.push(5);
    reversed.push(4);
    reversed.push(3);
    reversed.push(2);
    reversed.push(1);
    it('Simple Case', () => {
      expect(reverseLinkedList(forward.head)).to.eql(reversed.head);
    });
  });

  xdescribe('Zip Linked List', () => {
    const firstLL = new LinkedList();
    const secondLL = new LinkedList();
    const result = new LinkedList();
    firstLL.push(1);
    firstLL.push(5);
    firstLL.push(10);
    secondLL.push(2);
    secondLL.push(3);
    secondLL.push(8);
    result.push(1);
    result.push(2);
    result.push(3);
    result.push(4);
    result.push(8);
    result.push(10);
    it('Zipped Case', () => {
      expect(zipLL(firstLL.head, secondLL.head)).to.eql(result.head);
    });
  });

  describe('Kth To Last Node', () => {
    const forward = new LinkedList();
    forward.push(1);
    forward.push(2);
    forward.push(3);
    forward.push(4);
    forward.push(5);

    it('Basic Case', () => {
      expect(kthToLastNode(2, forward.head)).to.equal(3);
    });
    it('Last Case', () => {
      expect(kthToLastNode(0, forward.head)).to.equal(5);
    });
  });

  describe('Is Palindrome', () => {
    it('Fail Case', () => {
      const fail = new LinkedList();
      fail.push(1);
      fail.push(2);
      fail.push(3);
      expect(isPalindrome(fail.head)).to.equal(false);
    });

    it('Work Case', () => {
      const work = new LinkedList();
      work.push(1);
      work.push(2);
      work.push(3);
      work.push(2);
      work.push(1);
      expect(isPalindrome(work.head)).to.equal(true);
    });
  });
});
