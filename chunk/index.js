// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function mycChunk(array, size) {
  chunked = [];
  for (let i=0; i<array.length; i+=size){
    let miniArray = [];
    if (i+size <= array.length){
      for (let j=i; j<i + size; j++){
        miniArray.push(array[j]);
      }
    }
    else{
      for(let j=i; j<array.length; j++){
        miniArray.push(array[j]);
      }
    }
    chunked.push(miniArray);
  }
  return chunked;
}

function obviousChunk(array, size){
  const chunked = [];
  for (let element of array){
    const last = chunked[chunked.length-1];
    // if the last element in chunked doesn't exist, or if it is an array of size,
    // push the current element in a new array
    if (!last|| last.length === size ){
      chunked.push([element]);
    }
    // if not, add to the last available array
    else{
      last.push(element);
    }
  }
  return chunked;
}

function chunk(array, size){
  const chunked = [];
  let index = 0;
  while (index<array.length){
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;

}

module.exports = chunk;
