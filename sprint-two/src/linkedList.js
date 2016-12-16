var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var temp;
    if (list.head !== null) {
      temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target) {
    var start = list.head;
    var next = start.next;

    if (start.value === target) {
      return true;
    } else {
      if (next === start.next) {
        // next = start.next;
        next.contains(target);
      } else {
        next = next.next;
        if (next !== undefined) {
          next.contains(target);
        } else {
          return false;
        }
      }
    }
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
  // list.contains = function(target) {
  //   // Does the head.value = target?
  //   if (this.head !== undefined) {
  //     if (this.value === target) {
  //       return true;
  //     } else {
  //       if (this.next === null) {
  //         return false; 
  //       } else {
  //         this.next.contains(target);
  //       }
  //     }
  //   } else {
  //     if (this.head === target) {
  //       return true;
  //     } else {
  //       if (this.head.next === null) {
  //         return false; 
  //       } else {
  //         this.head.next.contains(target);
  //       }
  //     }
  //   }
  // };
