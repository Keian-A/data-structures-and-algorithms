## Pseudocode

```text
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Pseudocode walkthrough
The first line declares a function name, with the parameter being an array of integers

The second line starts a for loop which iterates for how many index values there are in the array length

Inside the for loop:

Initialize 2 variables,
- the current value of the for loop variable -1. (j)
- the current value of the position in the array at the index of the for loop variable. (temp)

Starts while loop, while j is greater than 0 and temp is less than the value of the array at index position j:

Sets the new value of `arr[j + 1] = arr[j]` - which essentially sets the current value of the array to the next position's value in the array.

Sets j equal to j - 1, moving backwards 1 position in the array.

Outside of the while loop:

Sets `arr[j + 1] = temp` - which essentially sets the next value of the array to the current position's value.

Code [Here](./insertSort.js)

## Challenge description
The purpose of this pseudocode & code is to sort an array of integers by smallest number to largest number. For example: an array of values `[8, 4, 23, 42, 16, 15]` sorted through this algorithm will return: `[4, 8, 15, 16, 23, 42]`. The big O of time is O(n^2) since there is a while loop within the for loop, so we are looping through the array for each iteration of the for loop. The big O of space is O(1) since the algorithm changes the array in-place, does not make any variables that changes based on any factors.
