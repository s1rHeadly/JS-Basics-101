// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = "developer";

function capitalizeStr(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(capitalizeStr(myString));

function capitalizeString(str) {
  const [first, ...rest] = str;
  const firstChar = first.toUpperCase();
  const restChars = [...rest].join("");
  return `${firstChar}${restChars}`;
}

console.log(capitalizeString(myString));
