// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i< arr.length; i++){
    // shrinking window because each step
    // drags the largest element to the end
    // so dont need to consider the end alr
    for (let j = 0; j < (arr.length -i ); j++){
      if  (arr[j] > arr[j+1]){
        let lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;

}

function selectionSort(arr) {
  for (let i=0; i<arr.length; i++){
    let indexOfMin = i;
    // prove me wrong!
    for (let j= i+1; j<arr.length; j++){
      if (arr[j] < arr[indexOfMin]){
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i){
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;

}

function mergeSort(arr) {
  if (arr.length === 1){
    return arr;
  }
  // why floor
  const centre = Math.floor(arr.length/2);
  const left = arr.slice(0, centre);
  const right = arr.slice(centre);

  // when left and right are both 1 element long,
  // merge will sort and merge them into a 2 element array!
  return merge(mergeSort(left), mergeSort(right));



}

function merge(left, right) {
  const results = [];
  while(left.length && right.length){
    if (left[0]< right[0]){
      results.push(left.shift());
    } else{
      results.push(right.shift());
    }
  }
  // add all elements from results and whichever arr still has elements
  return[...results, ...left, ...right];

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
