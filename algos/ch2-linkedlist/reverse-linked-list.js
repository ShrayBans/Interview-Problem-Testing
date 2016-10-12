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

//   a -> b -> c -> d
//   a <- b <- c <- d

	//EASY IMPLEMENTATION IS TO JUST PUT EACH VALUE IN AN ARRAY AND TO ADD TO NEW LIST
	//HOW TO DO RECURSIVELY?
	//SPLIT UP EACH BODY WITH THE REST AND REVERSE EACH REST RECURSIVELY (Couldn't implement yet)

function reverseLinkedList(head) {
	var prev = null;
	var current = head;
	var next;
	while(current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
