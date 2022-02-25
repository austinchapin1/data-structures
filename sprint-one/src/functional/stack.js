var Stack = function() {

  var someInstance = {};
  var storage = {};

  // Use an object with numeric keys to store values
  someInstance.storage = storage;
  someInstance.counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {

    someInstance.storage[someInstance.counter] = value;

    someInstance.counter++;
  };

  someInstance.pop = function() {

    someInstance.counter--;

    if (someInstance.counter < 0) {
      someInstance.counter = 0;
    }
    var returnItem = someInstance.storage[someInstance.counter];
    delete someInstance.storage[someInstance.counter];
    return returnItem;

    // return someInstance.storager[someInstance.counter];
  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};
