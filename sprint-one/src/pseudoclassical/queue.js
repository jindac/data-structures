var Queue = function() {
  this.currentSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};

Queue.prototype.dequeue = function() {
  var temp;
  if (this.currentSize !== 0) {
    temp = this.storage[1];
    for (var i = 1; i < this.currentSize; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.currentSize--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.currentSize;
};


