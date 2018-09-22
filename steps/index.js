// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsMyAttempt(n) {
  for (let i = 1; i<=n; i++){
    console.log("#".repeat(i) + " ".repeat(n-i));
  }
}

function stepsIterate(n){
  for(let row = 0; row<n; row++){ //iterate through rows
    var stair = "";
    for(let col = 0; col<n; col++){ //iterate through columns
      if (col<=row){ //if the current col is less than or equal to the current row
        stair += "#";
      }
      else{
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function stepsRecursionMyattempt(n, row=0, stair = ''){
  // settling base case: if the row number is n, exit
  if (n=== row){
    return;
  }

  // if the length of the current stair is equal to n
  // can print alr!
  if (n === stair.length){
    console.log(stair)
    // do the next row!
    return steps(n, row+1); //MUST BE RETURN
  }

  // if the length of the stair is not equal to n yet
  if (stair.length <= row) { // check how many #s (row x should have x #s)
    stair += '#'; // keep adding until no # = row #
  } else{
    stair += ' '; // if enough #, start addign spaces!
  }
  steps(n, row, stair);

}

function steps(n, row=0, stair = ''){
  // settling base case: if the row number is n, exit
  if (n === row){
    return;
  }

  // if the length of the current stair is equal to n
  // can print alr!
  if (n === stair.length){
    console.log(stair)
    // do the next row!
    return steps(n, row+1); //MUST BE RETURN
  }

  // if stair.length <= row is true,
  // add = #
  // else add = ' '
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair+add);

}



module.exports = steps;
