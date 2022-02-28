const Graph = require('../graph.js');

describe('Testing Graph class with methods', () => {
    it('Node can be successfully added to the graph', () => {
        let graph = new Graph();
        let vertex = graph.add(1);
        expect(vertex.value).toEqual(1);
    });

    it('An edge can be successfully added to the graph', () => {
        let graph = new Graph();
        graph.add(1);
        graph.add(2);
        let result = graph.getNodes();
        let result2 = graph.addEdge(result[0], result[1], 0.5);
        expect(result2).toEqual(undefined);
    });

    it('A collection of all nodes can be properly retrieved from the graph', () => {
        let graph = new Graph();
        graph.add(1);
        graph.add(2);
        let result = graph.getNodes();
        // Tests for anything other than null or undefined (AKA truthy values)
        expect(result[0].value).toEqual(expect.anything());
        expect(result[1].value).toEqual(expect.anything());
    });

    it('All appropriate neighbors can be retrieved from the graph', () => {
        let graph = new Graph();
        graph.add(1);
        graph.add(2);
        let result = graph.getNodes();
        graph.addEdge(result[0], result[1], 0.5);
        result = graph.getNeighbors(result[0]);
        expect(result[0].v1).toEqual(expect.anything());
        expect(result[0].v2).toEqual(expect.anything());
        expect(result[0].weight).toEqual(expect.anything());
    });

    it('Neighbors are returned with the weight between nodes included', () => {
        let graph = new Graph();
        graph.add(1);
        graph.add(2);
        let result = graph.getNodes();
        graph.addEdge(result[0], result[1], 0.5);
        result = graph.getNeighbors(result[0]);
        expect(result[0].weight).toEqual(0.5);
    });

    it('The proper size is returned, representing the number of nodes in the graph', () => {
        let graph = new Graph();
        graph.add(1);
        graph.add(2);
        graph.add(3);
        graph.add(4);
        graph.add(5);
        let result = graph.size();
        expect(result).toEqual(5);
    });

    it('An empty graph properly returns 0 when size is called', () => {
        let graph = new Graph();
        let result = graph.size();
        expect(result).toEqual(0);
    });

    // Not testing: 'A graph with only one node and edge can be properly returned' as this doesn't make sense in any form of the word, you can't have an edge in a graph with only one node. An edge's very description is a connection between two nodes.
});