// normal arrow functions (similar to react)
const add = (a, b) => {
  return a * b;
};

console.log(add(3, 5));

// implicit return
const substract = (a, b) => a - b;

console.log(substract(10, 5));

// returning an object / wrap the curlies in brackets!
const person = (name) => ({
  Name: name,
});
console.log(person("david"));

const person2 = (name) => {
  return {
    name: name,
  };
};
console.log(person2("john"));

// callbacks / set as an argument - callback -in the first firstfunction, call callback() in the second function
// evoke the first function with a value and then evoke the second functuin as the callback

const items = [
  {
    title: "book 1",
    author: "David",
  },
  {
    title: "book 2",
    author: "Kevin",
  },
];

function showPosts(posts) {
  let html = "<ul>";
  html += posts
    .map((item) => `<li>${item.title}<span>${item.author}</span></li>`)
    .join("");
  html += "</ul>";
  console.log(html);
}

function createPost(person, callback) {
  const title = person.title;
  const author = person.author;

  const newItem = {
    title: title,
    author: author,
  };

  items.push(newItem);
  // Call showPosts directly with the updated items array
  callback(items);
}

createPost(
  {
    title: "Book 1",
    author: "emily Someone",
  },
  showPosts
);
