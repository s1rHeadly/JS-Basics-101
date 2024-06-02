function checkEmail(email) {
  const regex = new RegExp("@", "g");
  if (email.match(regex)) {
    return email !== email.indexOf(-1) && email;
  }
}

console.log(checkEmail("dmchale@squiz.net"));

// a string with anything inside it is TRUE
const emailAddress = "dmchale@squiz.net";

if (Boolean(emailAddress)) {
  console.log(Boolean(emailAddress));
}

// truthy / falsy values
/**
 * FALSEY VALUES
 * ================
 * false
 * 0
 * '' or empty string
 * null
 * undefined
 * Nan
 *
 *  * TRUTHY VALUES
 * ================
 * true
 * 1
 * 'string' string with char or chars
 * [] empty array
 * {} empty object
 * function() an empty function
 *
 *
 */

let x = undefined;
if (x) {
  console.log("this is a true value");
} else {
  console.log("this is a false value");
}

// Caveats
const children = 0;

if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log(`Please enter number of children`);
}
