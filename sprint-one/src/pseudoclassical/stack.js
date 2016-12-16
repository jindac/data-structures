var Stack = function() {
  this.currentSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};

Stack.prototype.pop = function() {
  var temp;
  if (this.currentSize !== 0) {
    temp = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.currentSize;
};
