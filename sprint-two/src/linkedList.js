var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var temp;
    if (this.head !== null) {
      temp = this.head.value;
      this.head = this.head.next;
      return temp;
    }
  };

  list.contains = function(target) {
    var currNode = this.head;
    while (currNode !== null) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
