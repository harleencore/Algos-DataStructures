// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // if (!dict[char]){
    //   dict[char] = 1;
    // }
    // else{
    //   dict[char] ++;
    // }
    chars[char] = chars[char] + 1 || 1;
  }

  //object starts with o, but they didn't choose to use for of for obj
  for (let char in chars){
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
