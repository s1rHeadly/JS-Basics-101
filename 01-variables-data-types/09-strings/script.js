const s = "Hello Worlds";

//console.log(s);
console.log(s.__proto__);
// console.dir(s);

let x;

x = s.length;
console.log("length =>", x);

x = s[0]; // get the letter H as s[0] equals to H
console.log("value by key => ", x);

x = s.startsWith("H");
console.log(x); // true

x = s.charAt(2); // gets the character at letter x
console.log(x);

x = s.substring(0, 5); // gets parts of the string starting at char 0 and ending at char 5
console.log(x);

x = s.slice(0, 5); // same as substring
console.log(x);

// split variations
x = s.split();
console.log(x); // ['Hello Worlds']

x = s.split("");
console.log(x); //  ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', 's']

x = s.split(" "); // ['Hello', 'Worlds']
console.log(x);

x = s.indexOf("W");
console.log("index of", x);

x = s.includes("Hello");
console.log("includes => ", x); // returns true or false
