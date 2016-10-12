/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

//NOT IN PLACE

function LinkedList() {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.push = function(value) {
	var node = new Node(value);
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

function zip(l1, l2) {
	var zipList = new LinkedList();
	while(l1.head && l2.head){

		if(l1.head) {
			zipList.push(l1.head.value);
			l1.head = l1.head.next;
		}
		if(l2.head) {
			zipList.push(l2.head.value);
			l2.head = l2.head.next;
		}
		
	}
	return zipList;
}

// function zip2(l1, l2) {
// 	var rem = l1.head.next;
// 	var rem2 = l2.head;
// 	l1.head.next = l2.head;
// 	rem = l2.head.next;
// 	l1.head = l1.head.next;
// 	l1.head.next = rem2;

// 	//

// 	//save whichever 


// 	while(l1.head && l2.head){
// 		l1.head.next = l2.head;
// 		l1.head = l1.head.next;
// 		l2.head.next = l1.head;
// 		l2.head = l2.head.next;
// 	}
// 	if(l2.head && !l1.head) {
// 		l1.head.next = 
// 	}

// 	return l1;
// }

// console.log(zip(list1, list2));


module.exports = {Node: Node, zip: zip};
