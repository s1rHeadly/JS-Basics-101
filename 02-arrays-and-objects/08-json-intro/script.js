const api = "https://api.github.com/users";

const post = {
  id: 2,
  name: "Post One",
  date: new Date().getFullYear().toString(),
};

// The post above is a JS object and must be converted to a JSON string to be stored in local storage
// in order to do this we use JSON.stringify()

const str = JSON.stringify(post);
console.log("json string => ", str);

// with json strings we cannot use normal JS methods like looping or get keys, values etc so we need to convert the JSON string back to a JS object
// do this using JSON.parse()

const jsObject = JSON.parse(str);
console.log("back to JS => ", jsObject);

// for local storage configuration
// 1. convert the JS object to store in local storage localstorage.setItem()
// 2. to use the same string in JS again , pull the string from local storage, convert to JS and manipulate as need be localstorage.getItem()
// 3. convert the JS object back to a JSON string and update local storage localstorage.setItem()
