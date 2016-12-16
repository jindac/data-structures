

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // var newNode = {};
  // newNode.value = node;

  // var node = {value: node}; 

  // this.nodes. = node;
  var graphItem = {};
  graphItem.value = node;
  graphItem.edges = [];

  this.nodes[graphItem.value] = graphItem;  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Call removeEdge here
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edges.includes(toNode) && 
      this.nodes[toNode].edges.includes(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Add an edge property to fromNode and Give fromNode's edge a value
  this.nodes[fromNode].edges.push(toNode);
  // Add an edge property to toNode and Give toNode's edge a value
  this.nodes[toNode].edges.push(fromNode);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var foundAt;
  //create helper func here;
  for (var i = 0; i < this.nodes[fromNode].edges.length; i++) {
    if (this.nodes[fromNode].edges[i] === toNode) {
      foundAt = i;
      break;
    }
  }
  for (var j = foundAt; j < this.nodes[fromNode].edges.length - 1; j++) {
    this.nodes[fromNode].edges[j] = this.nodes[fromNode].edges[j + 1];
  }
  this.nodes[fromNode].edges.pop();

  for (var i = 0; i < this.nodes[toNode].edges.length; i++) {
    if (this.nodes[toNode].edges[i] === fromNode) {
      foundAt = i;
      break;
    }
  }
  for (var j = foundAt; j < this.nodes[toNode].edges.length - 1; j++) {
    this.nodes[toNode].edges[j] = this.nodes[toNode].edges[j + 1];
  }
  this.nodes[toNode].edges.pop();
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


