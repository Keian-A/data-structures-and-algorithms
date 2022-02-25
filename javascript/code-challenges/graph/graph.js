'use strict';

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }

    size() {
        return this._adjacencyList.size;
    }

    add(val) {
        let vertex = new Vertex(val);
        this._adjacencyList.set(vertex, []);
        return vertex;
    }

    getNodes() {
        return Array.from(this._adjacencyList.keys());
    }

    addEdge(v1, v2, weight) {
        // The new edge needs to be added to both vertices
        let existingEdges1 = this._adjacencyList.get(v1);
        let edge = new Edge(v1, v2, weight);
        this._adjacencyList.set(v1, [...existingEdges1, edge]);
        let existingEdges2 = this._adjacencyList.get(v2);
        this._adjacencyList.set(v2, [...existingEdges2, edge]);
    }

    getNeighbors() {
        let sentBack = [];
        let result = this.getNodes();
        for (let ii = 0; ii < result.length; ii++) {
            sentBack.push(this._adjacencyList.get(result[ii]));
        }
        return sentBack;
    }
}

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(v1, v2, weight) {
        this.v1 = v1;
        this.v2 = v2;
        this.weight = weight;
    }
}

module.exports = Graph;
