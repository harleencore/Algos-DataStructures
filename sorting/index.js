// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i< arr.length; i++){
    // shrinking window because each step
    // drags the largest element to the end
    // so dont need to consider the end alr
    for (let j = 0; j< arr.length -i; j++){
      if  (arr[j] > arr[j+1]){
        let holder = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = holder;
      }
    }
  }
  return arr;

}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
