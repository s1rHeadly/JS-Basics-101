const socials1 = ["instagram", "twitter", "fcebook", "whatsapp"];

// use this in the console to get all methods associated with the element
console.log(socials1.__proto__);

socials1.forEach((item, index, array) =>
  console.log(`${index} - ${item}`, array)
);

// foreach with a function

const socials2 = ["instagram", "twitter", "fcebook", "whatsapp"];

// 1 create the function

function makeFirstUpperCase(el) {
  const [first, ...rest] = el;
  const firstChar = first.toUpperCase();
  const remainder = [...rest].join("");
  const finalString = `${firstChar}${remainder}`;
  console.log(finalString);
  return finalString;
}

// makeFirstUpperCase("instagram");

// 2 create the foreach and pass the function
socials2.forEach(makeFirstUpperCase);
