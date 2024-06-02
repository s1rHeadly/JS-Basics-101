// use while loops when the number of items we are looping over are unknown

let items = [
  { id: 1, name: "Item 1", price: 10.99 },
  { id: 2, name: "Item 2", price: 15.49 },
  { id: 3, name: "Item 3", price: 7.99 },
  { id: 4, name: "Item 4", price: 12.0 },
  { id: 5, name: "Item 5", price: 9.5 },
];

let i = 0; // counter variable

let numberOfItems = items.length ?? 0; // if the number of items is not a number give me 0;
console.log(numberOfItems);

while (i < items.length) {
  let { id, name, price } = items[i]; // Destructuring assignment
  console.log(`ID: ${id}, Name: ${name}, Price: $${price}`);
  i++;
}

const fruits = ["apple", "orange", "banana"];
fruits.length;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

let x = 1;
let y = 1;

//nested while loop
while (x <= 5) {
  console.log(`Number is ${x}`);

  while (y <= 5) {
    console.log(`${x} * ${y} = ${x * y}`);
    y++;
  }
  x++;
}

// remember : A do while lool will run nomatter what the condition is, it will always print something to the page
// Generally not a good loop method to use if we are looping over items we want to print to the page as the condirtion will always run something even wnen false
const testNumber = 10;

do {
  console.log(`number is ${i}`);
  i++;
} while (testNumber < 9);
