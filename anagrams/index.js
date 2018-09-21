// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// word.replace(/[^\w]/g, "").toLowerCase();

function myAnagrams(stringA, stringB) {
  const aMap = {};
  const bMap = {};
  //this takes spaces and punctuation into account!!!!
  //so it should not work actully
  if (stringA.length == stringB.length) {
    for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()){
      aMap[char] = aMap[char] + 1 || 1;
    }
    for (let char of stringB.replace(/[^\w]/g,"").toLowerCase()){
      bMap[char] = bMap[char] + 1 || 1;
    }
    for (let obj in aMap ){
      if (aMap[obj] != bMap[obj]){
        return false;
      }
    }
    return true;
  }
  return false;

}

function manyLoopsAnagrams(stringA, stringB){
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  //Object.keys() returns list of all keys
  if (Object.keys(aCharMap).length != Object.keys(bCharMap).length){
    return false;
  } else {
    for (let char in aCharMap){
      if (aCharMap[char] != bCharMap[char]){
        return false;
      }
    }
    return true;
  }

}

function buildCharMap(str){
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
  return  str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
