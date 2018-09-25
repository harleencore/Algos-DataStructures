// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



// function matrix(n) {
//   var bigMatrix = [];
//   for( let row = 0; row< n; row++){
//     bigMatrix.push([]);
//   }
//   for (let i=1; i<n^2; i++){
//     if (bigMatrix[0].length < n){
//       bigMatrix[0].push(i);
//     }
//     for (let j=1; j<n; j++ ){
//       bigMatrix[j].push(i);
//     }
//     if (bigMatrix[n-1].length <n){
//       bigMatrix[n-1].unshift(i);
//     }
//     for (let k=n-2; k>0; k--){
//       bigMatrix[k].unshift(i)
//     }
//   }
// }

function matrix(n){
  var results = [];
  for( let row = 0; row< n; row++){
    results.push([]);
  }
  var counter = 1;
  var startCol = 0;
  var endCol = n-1;
  var startRow = 0;
  var endRow = n-1;
  while (startCol <= endCol && startRow <= endRow){
    for (let col = startCol; col <= endCol; col++){
      results[startRow][col]= counter;
      counter++;
    }
    startRow++;
    for (let row = startRow; row <= endRow; row++){
      results[row][endCol]= counter;
      counter++;
    }
    endCol--;
    for (let col= endCol; col >= startCol; col--){
      results[endRow][col]= counter;
      counter++;
    }
    endRow--;
    for (let row = endRow; row >= startRow; row--){
      results[row][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
