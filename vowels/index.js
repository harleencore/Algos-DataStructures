// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowelsMyIterativeSoln(str) {
  var vowels = 0;
  for (let char of str.toLowerCase()){
    if (char=== 'a' || char === 'e' || char === 'i'|| char === 'o'|| char === 'u'){
      vowels += 1;
    }
  }
  return vowels;
}

function vowelsIterative(str){
  var counter = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()){
    if (checker.includes(char)){
      counter++;
    }
  }
  return counter;
}

function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  // if matches found, returns an array of values
  // else returns null
  // if there is a match: truthy
  // else it's falsey
  return matches ? matches.length : 0;
}

module.exports = vowels;
