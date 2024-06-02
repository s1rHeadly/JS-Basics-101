/**
 *Create a parent function
 * Create a child function
 * call the child function inside the parent to run the child function
 * call the parent function as normal
 
*/

function firstFunction() {
  // parent function
  const x = 100; // parent variable / cant be used inside the child function

  function secondFunction() {
    const y = 60; // child variable / cannot be called in the parent function
    return y + x; // return calculation to the child function
  }

  return secondFunction(); // evoke the second function by returning it to the parent function
}

console.log(firstFunction()); // call the parent function
