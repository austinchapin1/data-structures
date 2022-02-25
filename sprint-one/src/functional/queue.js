var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // var storage = {}
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.counter = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {

    someInstance.storage[someInstance.end] = value;
    someInstance.end++;
    someInstance.counter++;
  };


  someInstance.dequeue = function() {

    if (someInstance.counter > 0) {
      var returnItem = someInstance.storage[someInstance.start];
      delete someInstance.storage[someInstance.start];
      someInstance.start++;
      someInstance.counter--;
      return returnItem;
    }

    return undefined;
  };

  someInstance.size = function() {
    return someInstance.counter;
    // 10 - 5
  };

  return someInstance;
};



