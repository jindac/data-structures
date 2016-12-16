var Queue = function() {
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },

  dequeue: function() {
    var temp;
    if (this.currentSize !== 0) {
      temp = this.storage[1];
      for (var i = 1; i < this.currentSize; i++) {
        this.storage[i] = this.storage[i + 1];
      }
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


