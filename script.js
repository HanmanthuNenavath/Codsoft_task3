let displayValue = '';
let operator = '';
let firstValue = 0;

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function setOperator(op) {
  if (firstValue === 0) {
    firstValue = parseFloat(displayValue);
  }
  operator = op;
  displayValue = '';
}

function calculate() {
  let secondValue = parseFloat(displayValue);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
  }

  displayValue = result.toString();
  document.getElementById('display').value = displayValue;
  firstValue = 0;
  operator = '';
}

function clearDisplay() {
  displayValue = '';
  firstValue = 0;
  operator = '';
  document.getElementById('display').value = '';
}
