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
  const max = 1 + 2 * (n-1);
  for (let row=0; row < n; row++){
    var level = '';
    var pounds = 1 + 2*row;
    var spaces = n - 1 - row;
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

function pyramid(n) {
  const max = 1 + 2 * (n-1);
  for (let row=0; row < n; row++){
    var level = '';
    var pounds = 1 + 2*row;
    var spaces = n - 1 - row;
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



module.exports = pyramid;
