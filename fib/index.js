// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// fib(15) takes approx 651ms
// exponential time!
// O(2^n)
function fib(n) {
  if (n < 2){
    return n;
  }

  return fib(n-1) + fib(n-2);
}

// O(n)
// fib(15) takes less than 1ms
function fibIterative(n){
  const fibArray = [];
  for (let i = 0; i<=n; i++){
    if (i<=1){
      fibArray.push(i);
    }
    else{
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
  }
  return fibArray[n];
}

// memoisation
fib = memoize(fib);

function memoize(fn){
  const cache = {};
  // anonymous function
  return function(...args){
    if (cache[args]){
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

module.exports = fib;
