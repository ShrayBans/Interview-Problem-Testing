/*
 * Create a queue made of two stacks.
 * BONUS: optimize, so that it is O(1) time if you need to dequeue two item in a row
 */

function Stack() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.storage[this.length++] = val;
};

Stack.prototype.pop = function () {
  const temp = this.storage[this.storage.length - 1];
  this.storage.length--;
  this.length--;
  return temp;
};

Stack.prototype.isEmpty = function () {
  return this.length === 0;
};


function Queue() {
  this.outbox = new Stack();
  this.inbox = new Stack();
}

Queue.prototype.enqueue = function (val) {
  if (this.inbox.length) this.returnToOutbox();
  this.outbox.push(val);
};

Queue.prototype.dequeue = function () {
  if (this.inbox.length) return this.inbox.pop();
  while (this.outbox.length > 1) {
    this.inbox.push(this.outbox.pop());
  }
  return this.outbox.pop();
};

Queue.prototype.returnToOutbox = function () {
  while (this.inbox.length) this.outbox.push(this.inbox.pop());
};

Queue.prototype.isEmpty = function () {
  if (this.inbox.length) this.returnToOutbox();
  return this.outbox.length === 0;
};

Queue.prototype.getStorage = function () {
  if (this.inbox.length) this.returnToOutbox();
  return this.outbox.storage;
};

Queue.prototype.getLength = function () {
  if (this.inbox.length) this.returnToOutbox();
  return this.outbox.length;
};

module.exports = Queue;
