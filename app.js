/*As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.*/



/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let currentInput = ''; // Holds the current number being entered
let previousInput = ''; // Holds the previous number for operations
let operator = ''; // Holds the selected operator (+ or -)

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('#display'); // The calculator display

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    
      const value = event.target.innerText;
      if (event.target.classList.contains('number')) {
        handleNumber(value);
    
      } else if
          (event.target.classList.contains('operator')) {
      handleOperator(value);
      
      } else if (event.target.classList.contains('clear')) {
      clearCalculator();
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
function handleNumber(number) {
  if (currentInput === '' && operator === '=') {
    currentInput = number;
    operator = '';
  } else {
    currentInput += number;
  }
  updateDisplay(currentInput);
}

function handleOperator(op) {
  if (op === '=') {
    //calculate when "=" is pressed
    if (operator && previousInput && currentInput) {
      currentInput = calculate(previousInput, operator, currentInput);
      updateDisplay(currentInput);
      operator = op; 
    }
  } else {
    // Store the operator and move the input to previous input
    if (currentInput) {
      if (previousInput && operator) {
       
        previousInput = calculate(previousInput, operator, currentInput);
      } else {
        previousInput = currentInput;
      }
      currentInput = '';
    }
    operator = op;
  }
}

function calculate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (operator === '+') {
    return (a + b).toString();
  } else if (operator === '-') {
    return (a - b).toString();
  }
}

function clearCalculator() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0'); // Reset the display
}

function updateDisplay(value) {
  display.innerText = value;
}
