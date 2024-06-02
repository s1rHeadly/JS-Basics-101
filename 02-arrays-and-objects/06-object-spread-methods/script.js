const user = new Object();
user.isLoggedIn = false;
user.name = "david";

// console.log("obj => ", user);

const userCopy = Object.assign({}, user); // clone the user copy
userCopy.age = 40; // change the age of the userCopy
userCopy.name = "john"; /// change the name of the userCopy

console.log("userCopy => ", userCopy); //original obj will not change
console.log("obj => ", user); // userCopy will change as expected

const person = {
  address: {
    coords: {
      lat: 56.789,
      long: 1235.789,
    },
  },
};

console.log("person long => ", person.address.coords.long);

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { ...obj1, ...obj2 };
console.log("merged object => ", obj3);

const obj4 = Object.assign({}, obj1, obj2); // creates a new object where the obj1 and 2 will not be changed if obj4 is altered
console.log("merged copy of obj1 and obj2 => ", obj4);
obj4.a = 40;
console.log("testing => ", obj1, obj2);
console.log("obj4 altered => ", obj4);

const todos = [
  {
    id: 1,
    task: "buy milk",
  },
  {
    id: 2,
    task: "go to gym",
  },
  {
    id: 3,
    task: "clean apartment",
  },
  {
    id: 4,
    task: "buy protein",
  },
];

let y;

//first object
y = todos[0];
console.log("first element => ", y);

//first object key
y = todos[0]["task"]; // or todos[0].task
console.log("first element => ", y);

// check if values exist
const existingToDos = [];
y = todos;
y.forEach((item) => todos.length && existingToDos.push(item));

console.log("existing =>", existingToDos);

// check todos that have a task that has a string containing 'buy'
const containsBuy = [];
const reguarExp = new RegExp("buy");
todos.filter((item) => item.task.match(reguarExp) && containsBuy.push(item));
console.log("containsBuy => ", containsBuy);

// keys

const obj5 = {
  name: "david",
  address: "zetland",
  country: "australia",
};

// create an object from the keys and values arrays from obj5

// 1. loop over the keys
// 2. get the key
// 3. loop over the values
// 4. get the value
// 5. create an empty object
// 6. push each

let obj6 = new Object();
console.log("obj6 => ", obj6); // blank object

const keys = Object.keys(obj5);
const values = Object.values(obj5);
// console.log(keys, values);

const existingkeys = keys.length || 0; // check if keys exist in the object
const existingValues = values.length || 0; // check if values exist in the object

if (existingkeys === existingValues) {
  // check if we have equal keys and values
  const newObj = Object.fromEntries(
    keys.map((key, index) => [key, values[index]])
  );
  console.log(newObj);

  obj6 = { ...newObj };
}

console.log(obj6);

const newObj = keys.reduce((total, item, index) => {
  total[item] = values[index];
  return total;
}, {});

console.log("new obj =>", newObj);

// has own property => returns true or false

const hasName = obj5.hasOwnProperty("name");
console.log("has Name =>", hasName);
