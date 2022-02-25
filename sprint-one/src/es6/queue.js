class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
    this.counter = 0;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
    this.counter++;
  }

  dequeue() {
    if (this.counter > 0) {
      var returnItem = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      this.counter--;
      return returnItem;
    }
    return undefined;
  }

  size() {
    return this.counter;
  }
}
