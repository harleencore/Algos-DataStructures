// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function myPalindrome(str) {
  // if (str.split('').reduce((rev, char)=> char+rev, '') == str){
  //   return true;
  // }
  // else{
  //   return false;
// }
  return str.split('').reduce((rev, char) => char + rev, '') == str;

}

function simplePalindrome(str){
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function palindrome(str){
  return str.split('').every((char, i) =>{
    return char === str[str.length -i -1];
  })
}

module.exports = palindrome;
