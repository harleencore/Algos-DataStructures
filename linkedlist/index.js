// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null; // the head is the first node
    // upon init, linked list should be empty
    // so head should be null
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    // if(!this.head){
    //   return null;
    // }
    // let node = this.head;
    // while(node){
    //   if(!node.next){
    //     return node;
    //   }
    //   node = node.next;
    //
    // }
    return this.getAt(this.size()-1);
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast(){
    if (!this.head){
      return;
    }
    if (!this.head.next){
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next){
      previous = node;
      node = node.next;

    }
    previous.next = null;


  }

  insertLast(data){
    const last = this.getLast();
    if (!last){
      this.head = new Node(data);
      return;
    }
    last.next = new Node(data);
    return;

  }

  getAt(index){
    let counter = 0;
    let node = this.head;
    while(node){
      if (counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;


  }

  removeAt(index){
    if(!this.head){
      return;
    }
    if (index === 0 ){
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index-1);
    if (!previous || !previous.next){
      return;
    }
    previous.next = previous.next.next;
    return;
  }

  insertAt(Data, index){

    if(!this.head){
      this.head = new Node(Data);
      return;
    }
    if(index===0){
      this.head = new Node(Data, this.head);
      return;
    }
    const previous = this.getAt(index-1) || this.getLast();
    previous.next = new Node(Data, previous.next);


  }

  forEach(fn){
    if (!this.head){
      return;
    }
    let node = this.head;
    while(node){
      fn(node);
      node = node.next;
    }
    return;
  }


}

module.exports = { Node, LinkedList };
