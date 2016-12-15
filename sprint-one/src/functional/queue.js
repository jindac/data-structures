var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    var temp = storage[1];
    
    console.log('Before: ' + storage[1]);
    for (var i = 1; i < size; i++) {
      storage[i] = storage[i + 1];
    }
    console.log('After: ' + storage[1]);
    
    delete storage[size];
    
    if (size !== 0) {
      size--;
    }

    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


