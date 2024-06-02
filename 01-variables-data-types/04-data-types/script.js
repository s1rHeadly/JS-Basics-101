//strings
const firstName = "Sara";

// number
const age = 30;

//boolean
const haskids = true;

// null
const aptNumber = null; // returns object

// undefined
const score = undefined;
// or
let scored;

//bigInt
const n = 34534907097098979834n;

// reference types

const numbers = [1, 2, 3, 4, 5]; // array

const obj = {
  // object
  name: "john",
  age: 40,
};

function getName(name) {
  //function
  return name;
}

const name = getName("david");

const output = name;

console.log(output, typeof output);
