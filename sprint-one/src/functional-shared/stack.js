var Stack = function() {
  var someInstance = {};

  someInstance['storage'] = {};
  someInstance['size'] = stackMethods.size;
  someInstance['push'] = stackMethods.push;
  someInstance['pop'] = stackMethods.pop;
  someInstance['currentSize'] = 0;
  
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
  }
};