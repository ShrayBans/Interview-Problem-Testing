function insertionSort(array) {
  return array;
}

function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  return array;
}

module.exports = insertionSort;
