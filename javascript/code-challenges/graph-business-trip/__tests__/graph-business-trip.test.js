const Graph = require('../graph-business-trip.js');

describe('Tests graphBusinessTrip method', () => {
    it('Returns true on a valid input', () => {
        const graph = new Graph();
        graph.add('Dallas');
        graph.add('Beijing');
        graph.add('Seatac');
        graph.add('Denver');
        let result1 = graph.getNodes();
        graph.addEdge(result1[0], result1[2], 125); /* Dallas to Seatac $125 */
        graph.addEdge(result1[0], result1[3], 95); /* Dallas to Denver $95 */
        graph.addEdge(result1[2], result1[3], 157); /* Seatac to Denver $157 */
        graph.addEdge(result1[1], result1[3], 254); /* Beijing to Denver $254 */
        let resultObj = graph.graphBusinessTrip([result1[0], result1[3], result1[1]]); /* Dallas -> Denver -> Beijing */
        expect(resultObj).toEqual({
            valid: true,
            cost: '$349'
        });
    });

    it('Returns false on an invalid input (no edge between vertices)', () => {
        const graph = new Graph();
        graph.add('Dallas');
        graph.add('Beijing');
        graph.add('Seatac');
        graph.add('Denver');
        let result1 = graph.getNodes();
        graph.addEdge(result1[0], result1[2], 125); /* Dallas to Seatac $125 */
        graph.addEdge(result1[0], result1[3], 95); /* Dallas to Denver $95 */
        graph.addEdge(result1[2], result1[3], 157); /* Seatac to Denver $157 */
        graph.addEdge(result1[1], result1[3], 254); /* Beijing to Denver $254 */
        let resultObj = graph.graphBusinessTrip([result1[0], result1[1]]); /* Dallas -> Beijing */
        expect(resultObj).toEqual({
            valid: false,
            cost: '$0'
        });
    });

    it('Returns false on an input of 1 vertex', () => {
        const graph = new Graph();
        graph.add('Dallas');
        graph.add('Beijing');
        graph.add('Seatac');
        graph.add('Denver');
        let result1 = graph.getNodes();
        graph.addEdge(result1[0], result1[2], 125); /* Dallas to Seatac $125 */
        graph.addEdge(result1[0], result1[3], 95); /* Dallas to Denver $95 */
        graph.addEdge(result1[2], result1[3], 157); /* Seatac to Denver $157 */
        graph.addEdge(result1[1], result1[3], 254); /* Beijing to Denver $254 */
        let resultObj = graph.graphBusinessTrip([result1[0]]); /* Dallas */
        expect(resultObj).toEqual({
            valid: false,
            cost: '$0'
        });
    });
});