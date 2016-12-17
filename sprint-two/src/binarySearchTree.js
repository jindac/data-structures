var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  
  newTree.insert = binTreeMethods.insert;
  newTree.contains = binTreeMethods.contains;
  newTree.depthFirstLog = binTreeMethods.depthFirstLog;

  return newTree;
};

var binTreeMethods = {};

binTreeMethods.insert = function(value) {
  // If value is less than this.value, 
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binTreeMethods.contains = function(target) {
  // Recursive Version:
  // ------------------

  // if (this.value === target) {
  //   return true;
  // } else if (target < this.value) {
  //   return this.left ? this.left.contains(target) : false;
  // } else {
  //   return this.right ? this.right.contains(target) : false;
  // }
  // return false;

  // While Version:
  // --------------
  var next = this;
  while (next !== null) {
    if (next.value === target) {
      return true;
    } else if (target < this.value) {
      next = next.left;
    } else {
      next = next.right;
    }
  }
  return false;
};  

binTreeMethods.depthFirstLog = function(cb) {
  if (this) {
    cb(this.value);
  } 
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  } 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
