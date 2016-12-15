var Queue = function() {
  var someInstance = {};
  someInstance['enqueue'] = queueMethods.enqueue;
  someInstance['dequeue'] = queueMethods.dequeue;
  someInstance['size'] = queueMethods.size;
  someInstance['currentSize'] = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function() {
    this.currentSize++;
  },
  dequeue: function() {
    if (this.currentSize !== 0) {
      this.currentSize--;
      
    }
  },
  size: function() {
    return this.currentSize;
  },

};


