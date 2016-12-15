var Stack = function() {
  var someInstance = Object.create(stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },

  pop: function() {
    var temp;
    if (this.currentSize !== 0) {
      temp = this.storage[this.currentSize];
      delete this.storage[this.currentSize];
      this.currentSize--;
      return temp;
    }
  },

  size: function() {
    return this.currentSize;
  },

  currentSize: 0,

  storage: {}
};


