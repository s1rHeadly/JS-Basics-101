/**
 * 1.check each field value exists
 * 2. validate each field type
 * 3. use events for real time validation (separate function im thinking)
 * 4. add the form the a form submission function
 * 5. pass the sumbission function into an init function where everything runs in one block for the application
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

// this makes the error span DOM element appear and disappear
const errorHandler = (element, isValid = false) => {
  const spanError = element.parentElement.querySelector("span");
  if (spanError) {
    spanError.style.display = isValid ? "none" : "block";
  }
};

const addToForm = (options) => {
  const object = options.object;
  const key = options.key;
  const value = options.value;

  return (object[key] = value);
};

// Obj
//=========
//Data Form object
let formData = {};

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

  nameIsValid = !!isStringValid; // reset nameIsValid to true if this condition is met
  errorHandler(name, nameIsValid); // evoke the error handler function IF nameIsValid is false

  //populate the object with values IF the nameIsValid is true
  if (nameIsValid) {
    addToForm({
      object: formData ?? "",
      key: "name" ?? "",
      value: value ?? "",
    });
  }

  return nameIsValid; // return true or false from the initial validation boolean
};

// validate email
const validateEmail = () => {
  // set initial to false
  let emailIsValid = false;

  const email = getElement('[name="email"]'); // get the element
  if (!email) return;

  const value = email.value; // ger the value

  const isStringValid = minCharString(value, 5); // run the function minCharString to set the value and a min string length

  emailIsValid = !!isStringValid && value.indexOf("@") !== -1; // reset emailIsValid to true if this condition is met
  errorHandler(email, emailIsValid); // evoke the error handler function IF the emailIsValid is false

  //populate the object with values IF emailIsValid is true
  if (emailIsValid) {
    addToForm({
      object: formData,
      key: "email",
      value: value,
    });
  }

  return emailIsValid; // return true or false from the initial validation boolean
};

// use listeners function for real time validation
// dont do it inside the name and email functions, just get the values

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

// Form Submission - when the form is validated, this function will submit the form
const formSubmission = (e) => {
  e.preventDefault(); //stop initial browser form submission

  // check to see if both nameIsValid and emailIsValid functions passes boolean to true as per validation functions result
  const nameIsValid = validateName();
  const emailIsValid = validateEmail();
  // console.log(nameIsValid, emailIsValid); true, true OR false false depending it fields are valid
  if (nameIsValid && emailIsValid) {
    // IF both are true THEN we get the form data
    console.log(formData);
  }
};

// running init / app function
const init = () => {
  // add the form and submit it here
  const form = getElement("#contactForm");
  if (form) {
    form.addEventListener("submit", formSubmission); // pass in the form submission function
    inputListeners(); // then run the inputListeners function
  }
};

window.addEventListener("DOMContentLoaded", init); // when the DOM loads run the init (main) function
