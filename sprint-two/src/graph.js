// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(node)) {
      this.removeEdge(this.edges[i][0], this.edges[i][1]);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode)) {
      if (this.edges[i].includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var newEdge = [fromNode, toNode];
  this.edges.push(newEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var temp;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      temp = i;
      for (var j = temp; j < this.edges.length - 1; j++) {
        this.edges[j] = this.edges[j + 1];
      }
      this.edges.pop();
    }
  }
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */















// // Instantiate a new graph
// var Graph = function() {
//   this.nodes = {};
// };

// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   // var newNode = {};
//   // newNode.value = node;

//   // var node = {value: node}; 

//   // this.nodes. = node;
//   var graphItem = {};
//   graphItem.value = node;
//   graphItem.edges = [];

//   this.nodes[graphItem.value] = graphItem;  
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   for (var key in this.nodes) {
//     if (this.nodes[key].value === node) {
//       return true;
//     }
//   }
//   return false;
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   for (var i = 0; i < this.nodes[node].edges.length; i++) {
//     this.removeEdge(this.nodes[this.nodes[node].edges[i]], this.nodes[node].edges[i].value);
//   }
//   delete this.nodes[node];

// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   if (this.nodes[fromNode].edges.includes(toNode) && 
//       this.nodes[toNode].edges.includes(fromNode)) {
//     return true;
//   }
//   return false;
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   // Add an edge property to fromNode and Give fromNode's edge a value
//   this.nodes[fromNode].edges.push(toNode);
//   // Add an edge property to toNode and Give toNode's edge a value
//   this.nodes[toNode].edges.push(fromNode);
  
// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
//   var foundAt;
//   //create helper func here;
//   for (var i = 0; i < this.nodes[fromNode].edges.length; i++) {
//     if (this.nodes[fromNode].edges[i] === toNode) {
//       foundAt = i;
//       break;
//     }
//   }
//   for (var j = foundAt; j < this.nodes[fromNode].edges.length - 1; j++) {
//     this.nodes[fromNode].edges[j] = this.nodes[fromNode].edges[j + 1];
//   }
//   this.nodes[fromNode].edges.pop();

//   // for (var i = 0; i < this.nodes[toNode].edges.length; i++) {
//   //   if (this.nodes[toNode].edges[i] === fromNode) {
//   //     foundAt = i;
//   //     break;
//   //   }
//   // }
//   // for (var j = foundAt; j < this.nodes[toNode].edges.length - 1; j++) {
//   //   this.nodes[toNode].edges[j] = this.nodes[toNode].edges[j + 1];
//   // }
//   // this.nodes[toNode].edges.pop();
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */


