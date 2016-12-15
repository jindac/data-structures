var Stack = function() {
  var someInstance = {};
  someInstance['size'] = stackMethods.size;
  someInstance['push'] = stackMethods.push;
  someInstance['currentSize'] = 0;
  return someInstance; 
};

var stackMethods = {
  push: function() {
    this.currentSize++;

  },

  pop: function() {

  },

  size: function() {
    return this.currentSize;
  }
};


