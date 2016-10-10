function bubbleSort(array) {
	var iterable = true;
	while (iterable) {
		iterable = false;
		for(var i = 0; i<array.length; i++) {
			if(array[i+1] < array[i]) {				
				array = swap(array, i, i+1);
				iterable = true;
			}
		}
	}
	return array;
}

function mergeSort(array) {
	
	return array;
}

function quickSort(array) {

	return array;
}

function insertionSort(array) {

	return array;
}

function swap(array, i, j) {
	var temp = array[j];
	array[j] = array[i];
	array[i] = temp;
	return array;
}

module.exports = {
	bubble: bubbleSort,
	merge: mergeSort,
	quick: quickSort,
	insert: insertionSort,
};