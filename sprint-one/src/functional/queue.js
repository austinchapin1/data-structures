var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    // 0: "value"
  };

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // value goes to the back of the queue (left)

    // set to back/left/end?
    storage[0] = value;
    // if not the first item
    // increment everything up by 1? the key value
    // storage keys += 1


  };

  someInstance.dequeue = function() {
    // item comes out the front (right)

    // check if there are any values
    // if not return undefined
    // get value from front
    // delete value
    // increment everything up
    // return value from front

  };

  someInstance.size = function() {
    // number of items in someInstance or storage - length? position back minus position front?

  };

  return someInstance;
};


// new Queue =  {instance of a Queue with functions as properties} {storage}
