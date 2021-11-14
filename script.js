const numButtons = document.querySelectorAll(".calculator__buttons__number");
let answerButton = document.querySelector(".calculator__output__answer");
const operatorButtons = document.querySelectorAll(".calculator__buttons__operation");
const equalsButton = document.querySelector(".calculator__buttons__equals");
const clearAllButton = document.querySelector(".calculator__buttons__clearAll");
const deleteButton = document.querySelector(".calculator__buttons__delete");
let currentDisplay = document.querySelector(".calculator__output__display");
let colourButton = document.querySelector(".calculator__buttons__colour");

const valueLength = (numLength) => currentValue.length < numLength;
const refreshDisplay = (values) => currentDisplay.innerHTML = values;
const clearDisplay = (clearScreen) => clearAllButton.innerHTML = clearScreen;

//values defined for default, "" as an empty string, 0 as just a number of 0.
let currentValue = "";
let operatorValue = "";
let storedValue = 0;
let calculatedValue = 0;
let previousValue = "";


//goes through the number buttons and stores the values up to a sting length of 10.
numButtons.forEach((button) => {
  button.addEventListener("click", (changes) => {
    /*Checks value length does not exceed 19 characters as to not spill out of the calculator or stack */
    if (valueLength(19)) {
      //if NOT currentValue then either do this or that if true ot false
      !currentValue ? currentValue = changes.target.innerHTML : currentValue += changes.target.innerHTML;
      refreshDisplay(currentValue);
      console.log(currentValue);
    };
  });
});


//selects the operator clicked, and deletes a previous operator if it was pressed so it doesn't have two operators and cause error
operatorButtons.forEach((button) => {
  //removes any previous operator stored
  button.addEventListener("click", (changes) => {
    operatorButtons.forEach((button) => {
      button.classList.remove("current-operator");
    });
    //adds operator clicked
    button.classList.add("current-operator");
    operatorValue = changes.target.value;
    console.log(operatorButtons);
    if (currentValue) {
      /*Sets the stored value with a parse floated currentValue so it turns the string into a "real number", then resets the currentValue to a blank string to create a new currentValue */
      storedValue = parseFloat(currentValue);
      currentValue = ""
      console.log(operatorValue);
    };
  });
});

//for when equals button is hit
equalsButton.addEventListener("click", () => {
  operatorButtons.forEach((button) => {
    //this removes a operator if pressed before the equals so it doesn't go 1+1+= and create an error
    button.classList.remove("current-operator");
  });
  /*This if statement states, if there is no currentValue, and if the previousValue === a blank string is true then set the currentValue as the storedValue, if false the set the currentValue to have the previousValue */
  if (!currentValue)
    previousValue === "" ? currentValue = storedValue : currentValue = previousValue;

  //switch case, the operators have values so when one is pressed then one of the cases run
  switch (operatorValue) {
    case "plus":
      calculatedValue = storedValue + parseFloat(currentValue);
      break;
    case "minus":
      calculatedValue = storedValue - parseFloat(currentValue);
      break;
    case "times":
      calculatedValue = storedValue * parseFloat(currentValue);
      break;
    case "divide":
      calculatedValue = storedValue / parseFloat(currentValue);
      break;
  };
  //case applied and pushed to refresh the display and sets the new store value, and previous value
  console.log(calculatedValue);
  refreshDisplay(calculatedValue);
  storedValue = calculatedValue;
  previousValue = currentValue;
  currentValue = "";
});

//Function listens for when the clearAllButton is clicked, setting the display to 0, resets the currentValue to an empty string so a new calculation can be made, same with the operatorValue.
clearAllButton.addEventListener("click", () => {
  refreshDisplay("0");
  currentValue = "";
  operatorValue = "";
});

// colourButton.addEventListener("click", () => {
//   document.
// })

// Things to be added: 
// - Ans button
// - Backspace button
// - the :D button that changes the colour between dark and light theme