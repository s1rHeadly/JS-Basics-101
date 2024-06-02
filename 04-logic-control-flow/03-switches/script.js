let fruit = "Apple";
let message;

switch (fruit) {
  case "Banana":
    message = "Bananas are yellow.";
    break;
  case "Apple":
    message = "Apples are red or green.";
    break;
  case "Orange":
    message = "Oranges are orange, obviously!";
    break;
  default:
    message = "I don't know that fruit.";
}

console.log(message);
