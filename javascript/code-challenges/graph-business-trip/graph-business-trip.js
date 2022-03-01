'use strict';

const { compareDocumentPosition } = require("domutils");

class Graph {
    constructor() {
        this._adjacencyList = new Map();
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

    graphBusinessTrip(arr) {
        if (arr.length === 1 || arr.length === 0) return { valid: false, cost: '$0' }
        let resultVar = 0;
        for (let ii = 0; ii < arr.length - 1; ii++) {
            let tempVar = parseInt(JSON.parse(JSON.stringify(ii)));
            tempVar++;
            let curVertexEdgeList = this._adjacencyList.get(arr[ii]);
            for (let jj = 0; jj < curVertexEdgeList.length; jj++) {
                if (curVertexEdgeList[jj].v1.value === arr[tempVar].value || curVertexEdgeList[jj].v2.value === arr[tempVar].value) {
                    resultVar += curVertexEdgeList[jj].weight;
                } else if (jj === curVertexEdgeList.length - 1) {
                    return {
                        valid: false,
                        cost: '$0'
                    }
                }
            }
        }
        return {
            valid: true,
            cost: `$${resultVar}`
        }
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
