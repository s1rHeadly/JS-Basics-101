const calc = (num1, num2, operator) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : "Error: Division by Zero"),
    "**": (a, b) => a ** b,
  };

  const computation = operations[operator];

  return computation
    ? computation(num1, num2)
    : `Error: That's not a valid computation.`;
};

console.log(calc(23, 53, "+"));
