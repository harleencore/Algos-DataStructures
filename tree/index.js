// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data ){
    this.data = data;
    this.children = [];
  }
  add(data){
    this.children.push(new Node(data));
  }
  remove(data){
    this.children = this.children.filter(node =>{
      // return true for every element that isn't equal to data
      // return these elements
      return node.data !== data;
    })
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  traverseBF(fn){
    const arr = [this.root];
    while(arr.length){ //until it is null;
      const node = arr.shift(); //shift returns first element
      // DONT: node.children because that resturns array
      // you wan't the actual nodes
      // you could write:
      // for (let child of node.children){
      // arr.push(child);}
      // but ...node.children does the same thing

      arr.push(...node.children); //add node's children to the end of the array
      fn(node);
    }
  }

  traverseDF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }


}

module.exports = { Tree, Node };
