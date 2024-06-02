function calculator(options) {
  const num1 = options.num1;
  const num2 = options.num2;
  const operator = options.operator;

  let result; // the result of the calculation

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 - num2;
      break;

    default:
      result = "Sorry operator not found";
      break;
  }

  return result;
}

const getCalculation = calculator({
  num1: 3,
  operator: "+",
  num2: 90,
});

console.log(getCalculation);
