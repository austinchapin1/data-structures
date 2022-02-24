var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keyList = Object.keys(storage);


  // Implement the methods below
  someInstance.enqueue = function(value) {

    var placeInLine = String(keyList.length + 1);
    storage.placeInLine = value;
  };

  someInstance.dequeue = function() {
    if (keyList.length) {
      var itemToReturn = storage[1];
      delete storage[1];
      _.forEach(keyList, function (key) {
        return key--;
      });
      return itemToReturn;
    }
    return undefined;
  };

  someInstance.size = function() {
    return keyList.length;
  };

  return someInstance;
};

var test = new Queue;
test.enqueue('austin');
// console.log(test.size())



