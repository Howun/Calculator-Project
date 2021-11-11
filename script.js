const numButtons = document.querySelectorAll(".calculator__buttons__number");
let answerButton = document.querySelector(".calculator__output__answer");
const operatorButtons = document.querySelectorAll(".calculator__buttons__operation");
const equalsButton = document.querySelectorAll(".calculator__buttons__equals");
const clearAllButton = document.querySelectorAll(".calculator__buttons__clearAll");
const deleteButton = document.querySelectorAll(".calculator__buttons__delete");
let currentDisplay = document.querySelector(".calculator__output__display");


const valueLength = (numLength) => currentValue.length < numLength;
const refreshDisplay = (values) => currentDisplay.innerHTML = values;
const clearDisplay = (clearScreen) => clearAllButton.innerHTML = clearScreen;


let currentValue = "";
let operatorValue = "";
let storedValue = 0;
let calculatedValue = 0;
let previousValue = "";


// const numList = Array.from(numBut);
// console.log(numList);
// const operatorList = Array.from(operatorButtons);
// console.log(operatorList);



// for(let i = 0; i < numList.length; i++) {
//   numList[i].addEventListener("click", () => {
//     currentValue.push(numList[i].innerHTML)
//     console.log(currentValue)
//     currentDisplay.innerHTML = currentValue += numList
//   })
// }

numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if(valueLength(10)) {
      (currentValue) ? currentValue = event.target.innerHTML : currentValue += event.target.innerHTML;
      refreshDisplay(currentValue);
    }
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    operatorButtons.forEach((button) => {
      button.classList.remove("current-operator");
    });
    button.classList.add("current-operator");
    operatorValue = event.target.value;
    console.log("operator pressed");
    if (currentValue) {
      storedValue = parseFloat(currentValue);
      currentValue = ""
    }
  });
});

// for(let i=0; i < operatorList.length; i++) {
//   operatorList[i].addEventListener("click", () => {
    
//   console.log("operation button pressed")

// })
// }

// equalsButton.addEventListener("click", () => {
//   console.log(parseFloat(currentValue))
// })

// clearAllButton.addEventListener("click" () => {
//   if (clearAllButton.innerHTML === "AC") {
//     currentDisplay("0");
//   }
// })




// let currentDisplay = currentDisplay += numList;


// currentNumber.innerHTML = currentNumber;




//basically.... Just put each number pushed into a array, OR just store the numbers and do stuff to the stored number with the number you're inputting
