const todo = {
  id: 1,
  firstName: "David",
  lastName: "Mchale",
  age: 40,
  user: {
    isLoggedIn: false,
  },
};

const {
  id: position, // renaming
  firstName,
  lastName,
  age,
  user: { isLoggedIn }, // getting the value from the user isLoggedIn
} = todo;
console.log("destructure => ", firstName, lastName, age, isLoggedIn, position);

// destructuring arrays
const numbers = [34, 67, 23, 98, 10];
console.log("numbers => ", numbers);
const [first, second, ...rest] = numbers;
console.log("numbers =>", first, second, " then the rest", ...rest);

const number1 = first;
const number2 = second;

const remainder = [...rest];
console.log("remainder =>", remainder);
console.log("first => ", number1);
console.log("second => ", number2);
