import cities from "./cities.js";

const getElement = (selected) => {
  const domNode = document.querySelector(selected);
  if (!domNode) {
    console.log("sorry element not targetted correctly");
    return null;
  }
  return domNode;
};

// populate the DOM
const populateDOM = (data, element) => {
  const DOMHTML = data
    .map((item) => {
      const { name } = item;
      return `<option value="${name}">${name}</option>`;
    })
    .join("");

  element.innerHTML = DOMHTML;
};

const getSelectValue = (callback) => {
  const options = getElement("#city-select");

  options.addEventListener("change", function (e) {
    const value = e.target.value;
    // pass the value into the callback function we can use later
    callback(value);
  });
};

// app function
const init = () => {
  // populate the DOM with the cities data on load
  const selectDOM = getElement("#city-select");
  populateDOM(cities, selectDOM);

  let selectedCity = ""; // this gets updated with the function below

  // need to run the callback here
  // get the value and assign it to a variable outside the function
  getSelectValue((value) => {
    selectedCity = value; // Assign the value to selectedCity
    //  // Log the selected city
    if (selectedCity !== "") {
      const container = getElement(".container h3");
      container.textContent = selectedCity;
    }
  });
};

window.addEventListener("DOMContentLoaded", init);
