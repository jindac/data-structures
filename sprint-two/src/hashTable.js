

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index] || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  if (this._storage[index] !== undefined) {
    // this._storage.set(index, bucket);
    bucket.push([k, v]);
  } else {
    // Remember, this is a potential place to do work when moving on to
    // a resizable _.storage.
    this._storage.set(index, bucket);
    bucket.push[k, v];
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  console.log(this._storage);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket[0][0] === k) {
    bucket.shift();
  } else if (bucket[0][bucket.length - 1] === k) {
    bucket.pop();
  } else {
    var temp;
    for (var i = 1; i < bucket.length - 1; i++) {
      if (bucket[i][0] === k) {
        temp = i;
        for (var j = temp; j < bucket.length - 1; j++) {
          bucket[j] = bucket[j + 1];
        }
        bucket.pop();
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


