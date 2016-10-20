class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.parent = null;
  }
}

BinaryTree.prototype.add = function (value) {
  if (!this.parent) {
    this.parent = new Node(value);
    return;
  }
  let current = this.parent;
  while (current) {
    if (current.value < value) {
      if (!current.right) current.right = new Node(value);
      else current = current.right;
    } else if (current.value > value) {
      if (!current.left) current.left = new Node(value);
      else current = current.left;
    } else return;
  }
};

// DIFFICULT - need to rebalance tree on removal
// BinaryTree.prototype.remove = function (value) {
//   let current = this.parent;
//   while (current) {
//     if(current.value > value) {
//
//     } else if (current.value < value) {
//
//     } else
//   }
//
// };

BinaryTree.prototype.contains = function (value) {
  let current = this.parent;
  while (current) {
    if (current.value > value) {
      current = current.left;
    } else if (current.value < value) {
      current = current.right;
    } else return true;
  }
  return false;
};

BinaryTree.prototype.isBst = function (node) {
  return this.isBstUtil(node, this.minNode(node), this.maxNode(node));
};

BinaryTree.prototype.isBstUtil = function (node, min, max) {
  if (!node) return true;
  if (node.value < min || node.value > max) return false;
  return this.isBstUtil(node.left, this.minNode(node.left), this.maxNode(node.left)) && this.isBstUtil(node.right, this.minNode(node.right), this.maxNode(node.right));
};

BinaryTree.prototype.bfs = function (node, callback) {
  const queue = [];
  let current;
  queue.unshift(this.parent);
  while (queue.length) {
    current = queue.pop();
    callback(current);
    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }
};

BinaryTree.prototype.dfs = function (node, callback) {
  if (node.left) this.dfs(node.left, callback);
  callback(node);
  if (node.right) this.dfs(node.right, callback);
};

BinaryTree.prototype.height = function (node) {
  if (!node) return 0;
  const leftHeight = this.height(node.left);
  const rightHeight = this.height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

BinaryTree.prototype.isBalanced = function (node) {
  if (!node) return 0;
  const leftHeight = this.height(node.left);
  const rightHeight = this.height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

BinaryTree.prototype.minNode = function (node) {
  if (!node) return true;
  if (!node.left) return node.value;
  return this.minNode(node.left);
};

BinaryTree.prototype.maxNode = function (node) {
  if (!node) return true;
  if (!node.right) return node.value;
  return this.maxNode(node.right);
};

BinaryTree.prototype.secondMax = function (node) {
  if (node.right && !node.right.right && !node.right.left) return node.value;
  else if (!node.right) return this.maxNode(node.left);
  return this.secondMax(node.right);
};

module.exports = { BinaryTree, Node };
