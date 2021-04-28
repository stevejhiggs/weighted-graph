import Graph from 'graph-data-structure'

// set up a graph
const graph = Graph()

// add our initial nodes
graph.addEdge('london', 'paris', 0.1)
graph.addEdge('london', 'new york', 1)
graph.addEdge('paris', 'new york', 0.9)
graph.addEdge('lisbon', 'paris', 0.9)
graph.addEdge('paris', 'lisbon', 0.8)

// output serialised graph structure
console.log('lists of nodes and edges')
console.log(graph.serialize())

// get all destinations from london
console.log('all destinations from london')
console.log(graph.adjacent('london'))

console.log('shortest path from lisbon to new york via Dijkstras algorithm')
console.log(graph.shortestPath('lisbon', 'new york'))
