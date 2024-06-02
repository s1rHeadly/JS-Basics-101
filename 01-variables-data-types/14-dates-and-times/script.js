let d;

d = new Date();

console.log(d.__proto__); // show the date object

d = new Date("2021-07-10T12:30:00"); // time specific
console.log(d);

d = new Date("07-10-2021");

// timestamps

d = d.getTime();
console.log("currentTimeStamp of the above data", d);

d = Date.now(); // current timestamp in milliseconds => 1713668644572
console.log(d);

d = new Date(1713668644572);
console.log("time milli =>", d);

d = Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  year: "numeric",
}).format(d);

console.log(d);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

d = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleDateString(
  "en-AU",
  options
);
console.log(d);
