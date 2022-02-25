var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.counter = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.end] = value;
    this.end++;
    this.counter++;
  },
  dequeue: function () {

    if (this.counter > 0) {
      var returnItem = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      this.counter--;
      return returnItem;
    }
    return undefined;
  },
  size: function () {
    return this.counter;
  }
};


