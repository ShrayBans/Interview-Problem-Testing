/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {

	//EASY IMPLEMENTATION IS TO JUST PUT EACH VALUE IN AN ARRAY AND TO ADD TO NEW LIST
	//HOW TO DO RECURSIVELY?
	//SPLIT UP EACH BODY WITH THE REST AND REVERSE EACH REST RECURSIVELY (Couldn't implement yet)



	//base case
	if(head.next === null) {
		var node = new Node(head.value) //NOT SURE IF HEAD HAS VALUE?!
		node.next = head;
		return node
	}
	//save 2 variables, the front piece and the end piece
	var toBeReversed = head.next;
	//take the second term 

	//

	//

	//
	return reverseLinkedList(head.next);
	//
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
