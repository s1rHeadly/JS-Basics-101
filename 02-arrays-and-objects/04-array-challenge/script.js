const arr = [1, 2, 3, 4, 5];

const array1 = [...arr];

console.log(array1.__proto__);
array1[array1.length] = 6;
array1.unshift(0);
array1.reverse();

// console.log(array1);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const removeNumber = arr1.indexOf(5);
arr1.pop(removeNumber);

// const combined = [...arr1, ...arr2];
const combined = arr1.slice(0, 4).concat(arr2);
console.log(combined);
