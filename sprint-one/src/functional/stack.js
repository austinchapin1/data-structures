var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var keyList = Object.keys(storage);

  // Implement the methods below
  someInstance.push = function(value) {
    var next = String(keyList.length + 1);
    storage[next] = value;
  };

  someInstance.pop = function() {

    if (keyList.length) {
      var last = String(keyList.length);
      var returnItem = storage[last] = value;
      delete storage[String(keyList.length)];
      return returnItem;
    }
    return undefined;
  };

  someInstance.size = function() {
    return keyList.length;
  };

  return someInstance;
};
