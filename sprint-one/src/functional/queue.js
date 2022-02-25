var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // var storage = {}
  someInstance.storage = {};
  someInstance.counter = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {

    someInstance.storage[someInstance.counter] = value;
    someInstance.counter++;
  };


  someInstance.dequeue = function() {
    someInstance.counter--;
    if (someInstance.counter < 0) {
      someInstance.counter = 0;
    }

    var returnItem = someInstance.storage[0];
    delete someInstance.storage[0];
    _.forEach(Object.keys(someInstance.storage), function (key) {
      return key--;
    });
    return returnItem;
  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};



