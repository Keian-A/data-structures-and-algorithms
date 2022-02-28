# Graphs
Graphs are data structures which can be best explained as a Map of keys (values input by user, could be any data type) and values (arrays which connect other vertices / or nodes to the key vertex / or node).

## Challenge
This challenge is to implement my own graph traversal (breadth-first).

## Approach
For this challenge I decided to 1 function named graphBreadthFirst. The sole parameter is a vertex (or a node) that belongs to a graph. I knew the return of the function eventually had to be an array of nodes (breadth first) from the 'root' vertex inserted into the function till all branches were covered. I decided on a queue to be the data structure to keep track of the vertices order I needed to approach to achieve the breadth-first required for this algorithm. I also needed an array which would store the visited nodes, so I wouldn't go into an infinite loop if some edges connected back up the graph to previously visited vertices. From there, it is just calling the getNeighbors method on each vertex from the queue, checking if each vertex connected by the edges are in the visited array, if not, add the vertex value to a return array, and add the vertex to the visited queue, and adding the edges to the traversal queue. Once all nodes have been traversed, return the return array.

## Efficiency

|Function|Time|Space|
|---|---|---|
|graphBreadthFirst|O(n)|O(n)|

This function is O(n) time since it uses recursion and runs each line of code based on how many vertices are connected via edges in the specific graph used. The O(n) space is similar, since the generated variables expand linearly based on the size of the connected nodes in the graph used.

## API
The function name is graphBreadthFirst, its sole parameter is the node which you traverse starting from.

[Code here](./graph-breadth-first.js)
