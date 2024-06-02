// Ways to declare a variable
// var, let, const

let firstName = "John";
let secondName = "Doe";
console.log(firstName, secondName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// Reassigning variables
age = 31;
console.log(age);

// declaring vars without values. Cannot use const, only let
// const cannot be reassigned or declared without a value;

let score;

score = 1;

console.log(score);

const person = {
  name: "John",
};

console.log(person);

person.name = "David";
console.log(person);

person.email = "someone@gmail.com";
console.log(person);

//decalring multiple variables at once
let a, b, c;
a = "days of summer";

const d = 10,
  e = 20,
  f = 30; // cannot be reassigned but used as an initial value for something

const baseNumber = d;

function getNumber(baseNumber, str) {
  return `${baseNumber} ${str}`;
}

console.log("get Number => ", getNumber(d, a));
