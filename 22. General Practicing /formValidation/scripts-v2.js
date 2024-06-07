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

// validate name
const validateName = () => {
  // set initial to false
  let nameIsValid = false;

  const name = getElement('[name="name"]');
  if (!name) return;

  const value = name.value;
  const isStringValid = minCharString(value, 5);

  nameIsValid = !!isStringValid; // changing the boolean value depending on the isStringValid Conditonal here
  errorHandler(name, nameIsValid); // evoke the error handler function

  return nameIsValid; // will give back true or false value
};

// validate email
const validateEmail = () => {
  // set initial to false
  let emailIsValid = false;

  const email = getElement('[name="email"]');
  if (!email) return;

  const value = email.value;
  const isStringValid = minCharString(value, 5);

  emailIsValid = !!isStringValid && value.indexOf("@") !== -1; // changing the boolean of emailIsValid to its right condition
  errorHandler(email, emailIsValid);

  return emailIsValid; // will give back true or false value
};

// use listeners function for real time validation =?
//dont do it inside the name and email functions, just get the values

const inputListeners = () => {
  const name = getElement('[name="name"]');
  if (name) {
    name.addEventListener("input", validateName);
  }

  const email = getElement('[name="email"]');
  if (email) {
    email.addEventListener("input", validateEmail);
  }
};

//validation
const formSubmission = (e) => {
  // when the form is validated, this function will submit the form
  e.preventDefault();

  // check to see if both nameIsValid and emailIsValid functions passes boolean to true as per validation functions result
  const nameIsValid = validateName();
  const emailIsValid = validateEmail();
  // console.log(nameIsValid, emailIsValid); true, true OR false false depending it fields are valid
};

// running init function
const init = () => {
  // add the form and submit it here
  const form = getElement("#contactForm");
  if (form) {
    form.addEventListener("submit", formSubmission); // pass in the form submission function
    inputListeners(); // then run the inputListeners function
  }
};

window.addEventListener("DOMContentLoaded", init); // when the DOM loads run the init (main) function
