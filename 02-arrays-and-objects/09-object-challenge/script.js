// 1. Create Array
const library = [
  {
    title: "Book One",
    author: "David",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Book Two",
    author: "John",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Book Three",
    author: "Kevin",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// 2. deep clone the library
const updatedLibrary = structuredClone(library);

// 3. change status of the read value

updatedLibrary[0].status.read = true;
updatedLibrary[1].status.read = true;
updatedLibrary[2].status.read = true;

// loop

// updatedLibrary.forEach((item) => {
//   item.status.read = true;
// });

console.log("original => ", library);
console.log("copy => ", updatedLibrary);

//4. get the first book and change the title
updatedLibrary[0].title = "First Book";

console.log("first Book =>", updatedLibrary);

//convert the library array to json
const libraryClone = structuredClone(library);

const str = JSON.stringify(libraryClone);
console.log("json string => ", str);
