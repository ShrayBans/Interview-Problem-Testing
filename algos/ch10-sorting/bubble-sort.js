function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  return array;
}

function bubbleSort(array) {
  let iterable = true;
  while (iterable) {
    iterable = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        array = swap(array, i, i + 1);
        iterable = true;
      }
    }
  }
  return array;
}


module.exports = bubbleSort;
