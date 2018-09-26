// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.mainStack = new Stack();
    this.holderStack = new Stack();
  }

  remove(){
    while(this.mainStack.peek()){
      this.holderStack.push(this.mainStack.pop());
    }
    // mistake: don't return first!!!
    // store, finish restoring original queue
    // then return record.
    // return this.holderStack.pop();
    const record = this.holderStack.pop();
    while(this.holderStack.peek()){
      this.mainStack.push(this.holderStack.pop());
    }
    return record;
  }

  add(record){
    this.mainStack.push(record);
  }
  peek(){
    // var lastEl;
    while(this.mainStack.peek()){
      // my method peeks at every step
      // stepehen's peeks ONCE, only when second stack is ready
      // lastEl = this.mainStack.peek();
      this.holderStack.push(this.mainStack.pop());
    }
    const record = this.holderStack.peek();
    while(this.holderStack.peek()){
      this.mainStack.push(this.holderStack.pop());
    }
    return record;
  }
}

module.exports = Queue;
