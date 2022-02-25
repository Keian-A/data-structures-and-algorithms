# Graphs
Graphs are data structures which can be best explained as a Map of keys (values input by user, could be any data type) and values (arrays which connect other vertices / or nodes to the key vertex / or node).

## Challenge
This challenge is to implement my own graph class with its own methods using JavaScript methods / functions.

## Approach
For this challenge I decided to make 3 classes: 
* One for the `Graph`, which is the exported class, which is also used in the construction of a graph variable.
* Another for each `Vertex` which is used as the key in the graph object.
* The last is the `Edge` which is used as the values, or rather array of values in the graoh object.

From there it's just data manipulation to get the following methods:

* size()
    * Arguments: none
    * Return: the total number of nodes / vertices in the graph

* add()
    * Arguments: value
    * Return: the added vertex

* getNodes()
    * Arguments: none
    * Return: all the nodes in the graph as a collection

* addEdge()
    * Arguments: 2 nodes to be connected by the edge, weight (optional)
    * Return: nothing

* getNeighbors()
    * Arguments: node
    * Return: a collection of edges connected to the given node

## Efficiency:

|Method|Time|Space|
|---|---|---|
|size|O(1)|O(1)|
|add|O(1)|O(1)|
|getNodes|O(n)|O(1)|
|addEdge|O(1)|O(1)|
|getNeighbors|O(n)|O(n)|

Most of these are O(1) due to how efficient HashMaps are at finding data. Most searching algorithms through other data structures are O(n) based on the size of the data structure, but HashMap doesn't care about the size, or length, it just returns what it contains (no traversal). This holds true for the creation (add) methods too. All big O for space is the same, since it adds only one variable to the graph per function invokation.

## API
Refer to above section for method overview.

[Code here](./graph.js)
