function calculation(options) {
  const num1 = options.num1;
  const num2 = options.num2;
  const operator = options.operator;

  const operations = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
  };

  const getOperator = operations[operator];
  console.log((getOperator = getOperator(num1, num2)));
}

const calculated = calculation();

console.log(calculated);
