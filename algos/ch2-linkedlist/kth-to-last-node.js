/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
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

function kthToLastNode(k, head) {
  let kPlusHead = head;
  // find the distance between pointer 1 and 2
  for (let i = 0; i < k; i++) {
    kPlusHead = kPlusHead.next;
  }
  // if kPlusHead.next == null
  while (kPlusHead.next) {
    kPlusHead = kPlusHead.next;
    head = head.next;
  }
  return head.value;
}

module.exports = kthToLastNode;

// var head = new LinkedList();
// head.add(5);
