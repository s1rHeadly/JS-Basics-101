// function delcaration

function addDollarSign(number) {
  return `$${number}`;
}

console.log(addDollarSign(9009));

// function expression
const addPercentageSign = function percentage(number) {
  const percent = `%${(number / 100) * number}`;
  return percent;
};

console.log(addPercentageSign(79));
