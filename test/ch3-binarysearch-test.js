/* global xdescribe describe xit it */

const BinaryTree = require('../algos/ch3-trees/tree-implementation.js').BinaryTree;
const Node = require('../algos/ch3-trees/tree-implementation.js').Node;

const expect = require('chai').expect;


describe('Binary Search Tree Algorithms', () => {
  const simpleTree = new BinaryTree();

  describe('Basic', () => {
    it('Adds to Empty', () => {
      simpleTree.add(5);
      expect(simpleTree.parent).to.eql(new Node(5));
    });

    it('Adds Values', () => {
      simpleTree.add(4);
      simpleTree.add(6);
      expect(simpleTree.parent.left.value).to.equal(4);
      expect(simpleTree.parent.right.value).to.equal(6);
    });

    it('Complex Add', () => {
      simpleTree.add(1);
      simpleTree.add(2);
      simpleTree.add(8);
      simpleTree.add(7);
      simpleTree.add(10);
      expect(simpleTree.parent.right.right.value).to.equal(8);
      expect(simpleTree.parent.left.left.right.value).to.equal(2);
    });

    xit('Removes Add', () => {
      expect(simpleTree.parent.right.right.value).to.equal(8);
      expect(simpleTree.parent.left.left.right.value).to.equal(2);
    });

    it('Contains', () => {
      expect(simpleTree.contains(5)).to.equal(true);
      expect(simpleTree.contains(3)).to.equal(false);
    });

    it('Max Height', () => {
      expect(simpleTree.height(simpleTree.parent)).to.equal(4);
      expect(simpleTree.height(simpleTree.parent.left)).to.equal(3);
    });
  });

  describe('Tree Traversal', () => {
    it('Max Node', () => {
      expect(simpleTree.maxNode(simpleTree.parent)).to.equal(10);
    });

    it('Min Node', () => {
      expect(simpleTree.minNode(simpleTree.parent)).to.equal(1);
    });

    it('Second Highest Node', () => {
      expect(simpleTree.secondMax(simpleTree.parent)).to.equal(8);
      simpleTree.parent.right.right.right = null;
      expect(simpleTree.secondMax(simpleTree.parent)).to.equal(7);
    });

    it('DFS', () => {
      const addOne = (node) => {
        node.value += 1;
      };
      expect(simpleTree.contains(3)).to.equal(false);
      simpleTree.dfs(simpleTree.parent, addOne);
      expect(simpleTree.contains(3)).to.equal(true);
    });

    it('BFS', () => {
      const subOne = (node) => {
        node.value -= 1;
      };
      expect(simpleTree.contains(3)).to.equal(true);
      simpleTree.bfs(simpleTree.parent, subOne);
      expect(simpleTree.contains(3)).to.equal(false);
    });

    it('Checks if is Binary Search Tree', () => {
      expect(simpleTree.isBst(simpleTree.parent)).to.equal(true);
      simpleTree.parent.right.right.right = new Node(3);
      expect(simpleTree.isBst(simpleTree.parent)).to.equal(false);
    });

    xit('Checks if Balanced', () => {
      const balancedTree = new BinaryTree();
      balancedTree.add(5);
      balancedTree.add(3);
      balancedTree.add(7);
      balancedTree.add(5);
      balancedTree.add(5);
      expect(simpleTree.isBst(simpleTree.parent)).to.equal(true);
      simpleTree.parent.right.right.right = new Node(3);
      expect(simpleTree.isBst(simpleTree.parent)).to.equal(false);
    });
  });
});
