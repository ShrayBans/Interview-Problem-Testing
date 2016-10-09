function bubbleSort(array) {

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