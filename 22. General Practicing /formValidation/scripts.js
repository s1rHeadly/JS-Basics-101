/**
 * 1.check each field value exists
 * 2. validate each field type
 * 3. submit form ONLY when all fields are validated
 *
 *
 */

// =================
// helpers
// =================

// this will check to see if we are targetting an element in the DOM
const getElement = (selected) => {
  const element = document.querySelector(selected);
  if (!element) {
    console.log("no element targetted");
    return null;
  }
  return element;
};

// this will check we have a minimum string length per field type
const minCharString = (str, length) => {
  // console.log(`string => ${str} - ${str.length + 1}`);
  return str.length > length ? str : null;
};

// this makes the error span DOM element appear and disappear using setTimeOut function
const errorHandler = (element, isValid = false) => {
  const spanError = element.parentElement.querySelector("span");
  if (spanError) {
    spanError.style.display = isValid ? "none" : "block";
  }
};

// =================
// functions
// =================

const isNameValid = () => {
  // set initial to false
  let nameIsValid = false;

  const name = getElement('[name="name"]');
  if (!name) return;

  name.addEventListener("input", function (e) {
    const value = e.target.value;
    const isStringValid = minCharString(value, 5);

    nameIsValid = !!isStringValid; // reverse false to true if the string exists
    errorHandler(name, nameIsValid); // evoke the error handler function
  });

  return nameIsValid;
};

isNameValid();

const isEmailValid = () => {
  // set initial to false
  let emailIsValid = false;

  const email = getElement('[name="email"]'); // get element
  if (!email) return;

  email.addEventListener("input", function (e) {
    const value = e.target.value;
    const isStringValid = minCharString(value, 5);

    emailIsValid = !!isStringValid && value.indexOf("@") !== -1;
    errorHandler(email, emailIsValid);
  });

  return emailIsValid;
};
// close isEmailValid function

isEmailValid();

//validation
const formSubmission = (e) => {
  // when the form is validated, this function will submit the form
  e.preventDefault();

  // check to see if both nameIsValid and emailIsValid passes

  const nameIsValid = isNameValid();
  const emailIsValid = isEmailValid();

  console.log(nameIsValid, emailIsValid);
};

// running init function
const init = () => {
  // form handler
  const form = getElement("#contactForm");
  form.addEventListener("submit", formSubmission);
};

window.addEventListener("DOMContentLoaded", init);
