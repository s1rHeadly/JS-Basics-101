let numberStr = "100";

// change string to number
numberStr = +numberStr;
numberStr = parseInt(numberStr);
numberStr = Number(numberStr);

console.log(numberStr, typeof numberStr);

// change number to string
let numberNum = 100;
numberNum = numberNum.toString();
numberNum = String(numberNum);
numberNum = numberNum + "";

console.log(numberNum, typeof numberNum);

let boolValue = 1;
boolValue = Boolean(boolValue); // 1 is a truthy value, 0 is a falsey value

console.log(boolValue, typeof boolValue);
