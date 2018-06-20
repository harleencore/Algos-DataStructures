// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// stephen says to avoid this for loop!!!!
function myReverse(str) {
  ans = ""; // let!!!
  for (i=str.length-1; i>=0; i--){ //var i!!!!
    ans += str[i];
  }
  return ans;
}

function arrayReverse(str) {
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');
  return str.split('').reverse().join('');

}

function forLoopReverse(str){
  let reversed = '';

  for (let character of str){
    reversed = character + reversed;
  }

  return reversed;
}

function es5Reverse(str){
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

function reverse(str){
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
