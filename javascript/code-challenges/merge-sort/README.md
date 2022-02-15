## Pseudocode
Line-by-line explanation
- Function name (Mergesort) with an array parameter
- var (n) initialized for array length
- if n > 1
  - initialize var (mid) for n/2
  - initialize var (left) for arr at position 0 to mid
  - initialize var (right) for arr at position mid to n
  - call "Mergesort" function name, passing in (left)
  - call "Mergesort" function name, passing in (right)
  - call "Merge" function name, passing in (left, right, arr)

- Function Merge(left, right, arr)
  - initialize var (i) = 0
  - initialize var (j) = 0
  - initialize var (k) = 0

  - While i < left.length and j < right.length
    - if left[i] <= right[j]
      - arr[k] = left[i]
      - i++
    - else
      - arr[k] = right[j]
      - j++
    - k++
  - if i = left.length
    - set remaining entries in arr to remaining values in right
  - else
    - set remaining entries in arr to remaining values in left

## Explanation
The purpose of this code is to sort an array from smallest to biggest values. This method cuts the big O of time to n/2 due to the method cutting the array in half, sorting both of the sides, then merging them together.

[Code](./merge-sort.js);
