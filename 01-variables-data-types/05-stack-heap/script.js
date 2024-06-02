/**
 * Stack: is where primitive values are stored in memory
 *
 * let, const etc
 *
 *
 * Heap: Where reference types are stored in memory
 * functions, arrays, objects
 */

// eg

// primative values are stored on the stack
const name = "john";
const age = 30;

// reference values on the heap
const person = {
  // first object
  name: "brad",
  age: 40,
};

let newName = name; // change newName value
newName = "Alan";
console.log("names =>", name, newName);

let newPerson = person; // second object
person.name = "David"; // update first object name key

console.log("objects =>", person, newPerson); // note how both objects value of name has changed because they are referenced - not copies
