let displayNumber="";
let firstNumber=0;
let secondNumber=0;
let calcResult=0;
const displayResult = document.querySelector(".displayResult");

// buttons selectors
const buttonOne=document.querySelector("#one");
const buttonTwo=document.querySelector("#two");
const buttonThree=document.querySelector("#three");
const buttonFour=document.querySelector("#four");
const buttonFive=document.querySelector("#five");
const buttonSix=document.querySelector("#six");
const buttonSeven=document.querySelector("#seven");
const buttonEight=document.querySelector("#eight");
const buttonNine=document.querySelector("#nine");
const buttonZero=document.querySelector("#zero");
const buttonClear=document.querySelector("#clear");
const buttonMultiply=document.querySelector("#multiply");
const buttonDivide=document.querySelector("#divide");
const buttonAdd=document.querySelector("#add");
const buttonSubtract=document.querySelector("#subtract");
const buttonEquals=document.querySelector("#equals");

// buttons for the number keys

buttonOne.addEventListener("click",()=>{
    displayResult.textContent+=1;
    displayNumber +=1;
});
buttonTwo.addEventListener("click",()=>{
    displayResult.textContent+=2;
    displayNumber +=2;
});
buttonThree.addEventListener("click",()=>{
    displayResult.textContent+=3;
    displayNumber +=3;
});
buttonFour.addEventListener("click",()=>{
    displayResult.textContent+=4;
    displayNumber +=4;
});
buttonFive.addEventListener("click",()=>{
    displayResult.textContent+=5;
    displayNumber +=5;
});
buttonSix.addEventListener("click",()=>{
    displayResult.textContent+=6;
    displayNumber +=6;
});
buttonSeven.addEventListener("click",()=>{
    displayResult.textContent+=7;
    displayNumber +=7;
});
buttonEight.addEventListener("click",()=>{
    displayResult.textContent+=8;
    displayNumber +=8;
});
buttonNine.addEventListener("click",()=>{
    displayResult.textContent+=9;
    displayNumber +=9;
});
buttonZero.addEventListener("click",()=>{
    displayResult.textContent+=0;
    displayNumber +=0;
});

// buttons for the operation keys:

buttonClear.addEventListener("click",()=>{
    displayResult.textContent = "";
    displayNumber="";
    firstNumber=0;
    secondNumber=0;
    calcResult=0;
});

buttonAdd.addEventListener("click",()=>{

});

//buttonSubtract.addEventListener("click",registerDisplayValue);
//buttonMultiply.addEventListener("click",registerDisplayValue);
//buttonDivide.addEventListener("click",registerDisplayValue);
// buttonEquals.addEventListener("click",()=>{});

// operations

const add=function(numberOne,numberTwo){
    return numberOne+numberTwo;
};

const substract=function(numberOne,numberTwo){
    return numberOne-numberTwo;
};

const multiply=function(numberOne,numberTwo){
    return numberOne*numberTwo;
};
const divide=function(numberOne,numberTwo){
    return numberOne/numberTwo;
};

//

function operate(operator, firstNumber,secondNumber) {

    return operator(firstNumber,secondNumber)
    
 }

function getNumber(){


}

console.log(operate(divide,3,4))

