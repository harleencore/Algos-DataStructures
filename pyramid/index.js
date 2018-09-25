// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//appparently this method is horrible because
//i shouldnt be changing variables like pounds and spaces
function pyramidBAD(n) {
  const max = 2 * n - 1;
  for (let row=0; row < n; row++){
    let level = '';
    let pounds = 1 + 2*row;
    let spaces = n - 1 - row;
    for (let col = 0; col < max ; col++){
      if (spaces!==0){
        level += ' ';
        spaces--;
      } else if (pounds!==0){
        level += '#';
        pounds--;
      } else {
        level+= ' ';
      }

    }
    console.log(level);
  }
}

function pyramid2ndAttempt(n) {
  const max = 2 * n - 1;
  for (let row=0; row < n; row++){
    let level = '';
    let pounds = 1 + 2*row;
    let spaces = n - 1 - row;
    for (let col = 0; col < max ; col++){
      if (col < spaces){
        level += ' ';
      } else if (col < spaces + pounds){
        level += '#';
      } else {
        level+= ' ';
      }

    }
    console.log(level);
  }
}

// stephen's solution
// O(n^2) => quadratic time 
function pyramidIterative(n){
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row ++){
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++){
      if (midpoint - row <= column && midpoint + row >= column){
        level += '#';
      } else{
        level += ' ';
      }
    }
    console.log(level);
  }
}

//recursion
function pyramidRecursion(n, row=0, level = ''){
  const max = 2 * n - 1;
  const midpoint = Math.floor(max/2);
  if (row === n ){
    return;
  }
  else if (level.length === max){
    console.log(level);
    return pyramid(n, row+1);
  }

  const add = level.length >= midpoint - row && level.length <= midpoint + row ? '#' : ' ';
  pyramid(n, row, level + add);

}

//benoits solution
function pyramid(n){
  for (let i = 0; i<n; i++){
    let pounds = 1 + 2*i;
    let spaces = n - i - 1;
    console.log(" ".repeat(spaces)+ "#".repeat(pounds) + " ".repeat(spaces));
  }
}



module.exports = pyramid;
