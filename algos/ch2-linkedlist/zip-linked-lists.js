/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function (value) {
  const node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

function Node(val) {
  this.value = val;
  this.next = null;
}

function zipLL(l1, l2) {
  console.log(l1);
  console.log(l2);
  let first = l1;
  const second = l2;
  let first_next;
  let second_next;

  while (first && second) {
    first_next = first.next;
    second_next = second.next;

    first.next = second;

    first =

		second_next = second.next;
  }
  return l1;
}


module.exports = zipLL;
