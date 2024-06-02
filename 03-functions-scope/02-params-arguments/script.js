// params as rest operator
function calAverage(...numbers) {
  // the rest operator is an array anyway so we can see this is passing in an array
  const average = numbers.reduce((total, item) => {
    total += item / 2;
    return total;
  }, 0);

  return average;
}

console.log(calAverage(5, 6, 7, 8, 9));

// params as  object

function userInfo(options) {
  const userName = options?.name ?? "No name given";
  const userAge = options?.age ?? "No age given";
  const userAddress = options?.address ?? "No address give";

  return `The users name is ${userName}, whos age is ${userAge} and lives at ${userAddress}`;
}

const user = userInfo({
  name: "David",
  age: 40,
  address: "23 Main street",
});

console.log(user);

// param as array

const randomNums = [2, 5, 6, 7, 8];

function getRandomNumber(array) {
  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

console.log(getRandomNumber(randomNums));
