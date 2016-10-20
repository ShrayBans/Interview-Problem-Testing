/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.maxStack = [];
  this.length = 0;
}

Stack.prototype.push = function (val) {
  if (this.maxStack[this.length - 1] > val) this.maxStack[this.length] = this.maxStack[this.length - 1];
  else this.maxStack[this.length] = val;
  this.storage[this.length++] = val;
};

Stack.prototype.pop = function () {
  const temp = this.storage[this.storage.length--];
  this.length--;
  this.maxStack.length--;
  return temp;
};

Stack.prototype.getMax = function () {
  return this.maxStack[this.length - 1];
};

Stack.prototype.isEmpty = function () {
  return this.length === 0;
};

module.exports = Stack;
