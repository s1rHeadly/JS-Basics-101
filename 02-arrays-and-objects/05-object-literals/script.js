let x;

const person = {
  name: "John",
  age: 40,
  isAdmin: Boolean(false),
  address: {
    street: "23 main street",
    state: "nsw",
    city: "sydney",
  },
  hobbies: ["sports", "music"],
};

x = person;
console.log("person obj => ", x);

x = person.name;
console.log("name => ", x);

x = person["isAdmin"];
console.log("is Admin =>", x);

x = person.address.street;
console.log("street => ", x);

x = person.hobbies[0];
console.log("first hobby => ", x);

x = person.name = "Jane";
x = person;
console.log("update person name => ", x);

x = person.isAdmin = Boolean(true);
x = person;
console.log("update person obj admin => ", person);

delete person.age;
x = person;
console.log("deleted from obj => ", x);

person.hasChildren = true;
x = person;
console.log("add property has children => ", x);

// create the function
person.greet = function () {
  return `Welcome ${this.name}`;
};

// call the function
x = person;
console.log("greet function => ", x.greet());

console.log("person proto =>", person.__proto__);

// using spacing in object keys that may have two words
// not really recommended as most json data has single or concatinated keys
const anotherOjb = {
  "first name": "david",
  "second name": "mchale",
};

console.log(anotherOjb["first name"]);
