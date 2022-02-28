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

    getNeighbors(node) {
        let result = this._adjacencyList.get(node);
        return result;
    }

    BFS(vertex) {
        let q = [];
        let returnArr = [];
        let visited = new Set();
        q.push(vertex);
        visited.add(vertex);
        while (q.length !== 0) {
            let current = q.shift();
            returnArr.push(current.value);
            let result = this._adjacencyList.get(current);
            result.forEach(element => {
                if (!visited.has(element.v1)) {
                    q.push(element.v1);
                    visited.add(element.v1);
                }
                if (!visited.has(element.v2)) {
                    q.push(element.v2);
                    visited.add(element.v2);
                }
            });
        }
        return returnArr;
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
