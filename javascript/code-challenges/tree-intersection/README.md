# Challenge Summary
This code challenge is about finding two identical values in two separate trees using a HashMap.

## Whiteboard Process
I plan on traversing through the first tree, adding values to a hashmap, then on the traversal of the second tree, checking each node's value against values stored in the hashmap, and add identical values to an array to return.

## Approach & Efficiency
* The big O of time is O(n) since it will run each line of code based on how large each tree is (n).
* The big O of space is O(n) since the return array will increase linearly based on how many identical values are found in each tree of (n) nodes.

## Solution
To run this code, copy the contents of [this file](./tree-intersection.js) in your own `file_name.js` file. You must add inputs on your own, which are two trees (must not be k-ary). However, if you set the return of the function to a variable, you can console.log this value. After running `node file_name.js` in your terminal, you should see the output array.