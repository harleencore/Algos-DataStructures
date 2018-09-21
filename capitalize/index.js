// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var strAns = str[0].toUpperCase();
  let i = 1;
  while (i <= str.length - 1) {
    if (str[i] === " "){
      strAns = strAns + " " + str[i + 1].toUpperCase();
      i+=2;
    }
    else{
      strAns += str[i];
      i++;
    }

  }
  return strAns;
}

module.exports = capitalize;
