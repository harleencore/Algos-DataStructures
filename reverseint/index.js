// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function myReverseInt(n) {
  neg = false;
  strInt = n.toString().split('').reduce((num, rev) => {
    if(num === '-'){
      neg = true;
    }
    return rev + num
  },'');

  if (neg === false ){ return parseInt(strInt);}
  else {
    console.log("-" + strInt);
    return parseInt("-" + strInt);}

}

function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

}
module.exports = reverseInt;
