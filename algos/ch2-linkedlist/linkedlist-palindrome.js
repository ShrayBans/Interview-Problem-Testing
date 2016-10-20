/**
* Checks if a linked list is a palindrome
*/

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = (val) => {
  const node = new Node(val);
  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

// move through linked list with two pointers (one twice the speed) to find the middle of the linked list and then reverse the half from the slower pointer and compare to the beginning
function isPalindrome(head) {
  let slow = head;
  let fast = head.next;
  let prev = null,
    next;
  // move through linked lists with two pointers
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // check if odd
  if (fast.next) slow = slow.next;

  // reverse second list
  let end = slow;
  while (end && end.next) {
    next = end.next;
    end.next = prev;
    prev = end;
    end = next;
  }

  // check if matches
  for (let begin = head; end; end = end.next, begin = begin.next) {
    if (begin.value !== end.value) return false;
  }
  return true;
}

module.exports = isPalindrome;
