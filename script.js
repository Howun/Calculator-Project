const numBut = document.querySelectorAll(".calculator__buttons__number");
const operatorButtons = document.querySelectorAll(".calculator__buttons__operation");
const equalsButton = document.querySelectorAll(".calculator__buttons__equals");
const clearAllButton = document.querySelectorAll(".calculator__buttons__clearAll");
const deleteButton = document.querySelectorAll(".calculator__buttons__delete");
let currentDisplay = document.querySelector(".calculator__output__input");
let currentResult = document.querySelector(".calculator__output__result");

let numValue = [];
let opValue = [];

const numList = Array.from(numBut);
console.log(numList);
const operatorList = Array.from(operatorButtons);
console.log(operatorList);



for(let i = 0; i < numList.length; i++) {
  numList[i].addEventListener("click", () => {
    numValue.push(numList[i].innerHTML)
    console.log(numValue)
    currentDisplay.innerHTML = `${numValue.join("")}`
  })
}

for(let i=0; i < operatorList.length; i++) {
  operatorList[i].addEventListener("click", () => {
    
  console.log("operation button pressed")

})
}




// let currentDisplay = currentDisplay += numList;


// currentNumber.innerHTML = currentNumber;




//basically.... Just put each number pushed into a array, OR just store the numbers and do stuff to the stored number with the number you're inputting
