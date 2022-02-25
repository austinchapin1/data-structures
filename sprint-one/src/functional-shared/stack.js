var Stack = function() {
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {

  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function () {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
    var returnItem = this.storage[this.counter];
    delete this.storage[this.counter];
    return returnItem;
  },

  size: function () {
    return this.counter;
  }
};


