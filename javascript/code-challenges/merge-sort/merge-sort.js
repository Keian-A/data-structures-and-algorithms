module.exports = function Mergesort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.splice(0, mid);
    let right = arr.splice(mid, mid);
    Mergesort(left);
    Mergesort(right);
    Merge(left, right, arr);
  }
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i = left.length) {
    for (let var1 = 0; var1 < left.length; var1++) {
      arr.push(left[var1]);
    }
  } else {
    for (let var1 = 0; var1 < right.length; var1++) {
      arr.push(right[var1]);
    }
  }
}