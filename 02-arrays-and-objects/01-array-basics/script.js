const numberOfItems = 5;

const textNumbers = ["one", "two", "three", "four"];

const html = [];

for (let i = 0; i < numberOfItems; i++) {
  if (textNumbers[i] !== undefined) {
    const number = textNumbers[i];
    const el = `<h2>${number}</h2>`;
    html.push(el);
  }
}
