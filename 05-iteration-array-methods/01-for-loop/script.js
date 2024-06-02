// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

//standar for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// nested loops

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   for (let j = 0; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// looping over array and if else
const names = ["brad", "john", "kevin", "sarah"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "sarah") {
    console.log(`My name is ${names[i]}`);
  } else {
    console.log(names[i]);
  }
}
