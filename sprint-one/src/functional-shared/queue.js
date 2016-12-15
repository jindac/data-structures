var Queue = function() {
  var someInstance = {};

  someInstance['storage'] = {};
  someInstance['enqueue'] = queueMethods.enqueue;
  someInstance['dequeue'] = queueMethods.dequeue;
  someInstance['size'] = queueMethods.size;
  someInstance['currentSize'] = 0;
  
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.currentSize] = value;
    this.currentSize++;
  },

  dequeue: function() {
    var temp;
    if (this.currentSize !== 0) {
      temp = this.storage[0];

      for (var i = 0; i < this.currentSize; i++) {
        this.storage[i] = this.storage[i + 1];
      }

      delete this.storage[this.currentSize];
      this.currentSize--;
      return temp;
    }
  },

  size: function() {
    return this.currentSize;
  }
};


