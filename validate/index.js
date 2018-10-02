// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // why do you need to check for null thoug?
  // will node.data > max return true if max is null?
  if(max !== null && node.data > max){
    return false;
  }

  if (min !== null && node.data < min){
    return false;
  }
  // need to check if valiate returns false
  // previousy did not return anything from validate
  // setting true is difficult in this case because you finish one fnction after
  // you've set off other recursive loops, but there's no way to tell if
  // you've finished looping
  if (node.left && !validate(node.left, min, node.data)){
    return false;
  }
  if(node.right && !validate(node.right, node.data, max)){
    return false;
  }
  return true;
}

module.exports = validate;
