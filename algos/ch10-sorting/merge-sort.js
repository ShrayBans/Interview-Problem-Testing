function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

function mergeSort(array) {
  const mid = Math.floor(array.length / 2);
  const first = array.slice(0, mid);
  const last = array.slice(mid);
  if (array.length === 1) {
    return array;
  }
  return merge(mergeSort(first), mergeSort(last));
}


module.exports = mergeSort;
