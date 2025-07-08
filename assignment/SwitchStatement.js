function add(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

let operator = "+";

switch (operator) {
  case "+": {
    console.log(add(1, 2));
    break;
  }
  case "-": {
    console.log(subtraction(2, 1));
    break;
  }
}
