var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.start = 0;
  this.end = 0;
  this.counter = 0;
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.end] = value;
  this.end++;
  this.counter++;
};


Queue.prototype.dequeue = function () {

  if (this.counter > 0) {
    var returnItem = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    this.counter--;
    return returnItem;
  }
  return undefined;
};


Queue.prototype.size = function () {
  return this.counter;
};

// var someInstance = new Queue;


