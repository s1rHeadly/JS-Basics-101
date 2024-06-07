import people from "../../data.js";

console.log(people);

// loop over arrays =>  use for 'of', then maybe use forEach etc for best practice
const items = ["chair", "table", "sofa", "book"];

for (const item of items) {
  console.log(item);
}

// loop over an array of objects
for (const person of people) {
  console.log(person);
  console.log(person.name);
}

// looping over Maps
const map = new Map();
map.set("name", "john");
map.set("age", "40");
map.set("address", "22 baker street");

for (const [key, value] of map) {
  console.log(`${key}:${value}`);
}
