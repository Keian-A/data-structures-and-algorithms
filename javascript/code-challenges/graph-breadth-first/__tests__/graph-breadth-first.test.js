const Graph = require('../graph-breadth-first.js');

describe('Tests graphBreadthFirst function', () => {
    it('Returns an array of values from a vertex derived from breadth-first search of the corresponding graph', () => {
        let graph = new Graph();
        graph.add(1);
        graph.add(2);
        let result = graph.getNodes();
        graph.addEdge(result[0], result[1], 0.5);
        let result2 = graph.BFS(result[0]);
        expect(result2).toEqual([1, 2]);
    });
});