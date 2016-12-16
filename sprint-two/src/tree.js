var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  // If head contains target, return true
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      var temp = this.children[i].contains(target);
      if (temp === true) {
        return true;
      }
    }
  } 
  return false;
  // Otherwise, recursively call contains on child array
  // which loops through all children

    // if first child contains target, return true

    // else, iterate to next child

      // if there are no children left
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

