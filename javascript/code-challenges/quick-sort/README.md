## Algorithm

```text
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Explanation
- The purpose of this pseudocode is to sort the array with big O (n/2) time since the array is split in half, each half is sorted, and combined, instead of the array as a whole.

## Code 

```JavaScript
function QuickSort(arr, left, right) {
  if (left < right) {
    const position = Partition(arr, left, right);
    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
  }
}

function Partition(arr, left, right) {
  const pivot = arr[right];
  const low = left - 1;
  for (let i = 0; 0 < arr.length; i++) {
    low++;
    Swap(arr, i, low);
  }
  Swap(arr, i, low);
  return low + 1;
}

function Swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
```