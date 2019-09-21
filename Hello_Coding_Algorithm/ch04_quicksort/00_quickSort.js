// if (Array.isArray(arr)) {
//     console.error("your input argument is not array);
// }

function quickSort(arr) {
  const length = arr.length;
  if (length < 2) {
    return arr;
  } else {
    const mid = Math.floor((length - 1 + 0) / 2);
    var pivot = arr[mid],
      less = [],
      greater = [];
    for (var i = 0; i < length; i++) {
      if (arr[i] < pivot) less.push(arr[i]);
      else if (arr[i] > pivot) greater.push(arr[i]);
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

const res = quickSort([3, 5, 1, 6, 4, 7, 2]);

res;
