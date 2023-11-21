let displayValue =0;
const displayResult = document.querySelector(".displayResult");
// buttons
const buttonOne =document.querySelector("#one");
const buttonTwo =document.querySelector("#two");
const buttonThree =document.querySelector("#three");
const buttonFour =document.querySelector("#four");
const buttonFive =document.querySelector("#five");
const buttonSix =document.querySelector("#six");
const buttonSeven =document.querySelector("#seven");
const buttonEight =document.querySelector("#eigh");
const buttonNine =document.querySelector("#nine");
const buttonZero =document.querySelector("#zero");
const buttonClear = document.querySelector("#clear")
buttonClear.addEventListener("click",()=>{
    displayResult.textContent = "";
});
buttonOne.addEventListener("click",()=>{
    displayResult.textContent+=1;
    displayValue +=1;
} )


function add(numberOne, numberTwo){
return numberOne+numberTwo;
}

function substract(numberOne, numberTwo){
return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo){
return numberOne*numberTwo;
}

function divide(numberOne, numberTwo){
return numberOne/numberTwo;

}

const theOperator=[add,substract,multiply,divide];
let firstNumber;
let secondNumber;

function operate(theOperator, firstNumber,secondNumber) {

}


