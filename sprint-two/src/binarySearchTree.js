var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left;
  newTree.right;
  
  newTree.insert = binTreeMethods.insert;
  newTree.contains = binTreeMethods.contains;
  newTree.depthFirstLog = binTreeMethods.depthFirstLog;

  return newTree;
};

var binTreeMethods = {};

binTreeMethods.insert = function(value) {
  // If value is less than this.value, 
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binTreeMethods.contains = function(target) {
  // If head contains target, return true
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  } 
  return false;
};  

binTreeMethods.depthFirstLog = function() {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
