This function takes in 2 arguments, an array of values to add, and the value representing how many numbers of children the tree will have max.

Mock call:

```js

const karyTree = require('./path_to_file.js');

const myArray = [1,2,3,4,5,6,7,8,9,10];

// Creates variable `tree` with the values from myArray with 4 children max per node.
let tree = karyTree(myArray, 4);

```

[JS Code](./k-ary.js)

Inspiration and main algorithm taken from [here](https://www.geeksforgeeks.org/construct-full-k-ary-tree-preorder-traversal/), tweaked for personal use case.
