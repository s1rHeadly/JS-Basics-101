function getCelcius(number) {
  const conversion = ((number - 32) * 5) / 9;
  return `The temperature is ${conversion.toFixed(2)}`;
}

console.log(`The temperature is ${getCelcius(90)} \xB0C`);
