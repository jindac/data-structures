var Queue = function() {
  var someInstance = {};
  someInstance['enqueue'] = queueMethods.enqueue;
  someInstance['size'] = queueMethods.size;
  someInstance['currentSize'] = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function() {
    this.currentSize++;
  },
  size: function() {
    return this.currentSize;
  },

};


