let displayNumber="";
let firstNumber=0;
let secondNumber=0;
let calcResult=0;
let currentOperation="";
const displayInput = document.querySelector(".displayInput");
const displayResult = document.querySelector(".displayResult");
displayInput.textContent=" ";
displayResult.textContent=" ";
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
    displayInput.textContent+=1;
    displayNumber +=1;
});
buttonTwo.addEventListener("click",()=>{
    displayInput.textContent+=2;
    displayNumber +=2;
});
buttonThree.addEventListener("click",()=>{
    displayInput.textContent+=3;
    displayNumber +=3;
});
buttonFour.addEventListener("click",()=>{
    displayInput.textContent+=4;
    displayNumber +=4;
});
buttonFive.addEventListener("click",()=>{
    displayInput.textContent+=5;
    displayNumber +=5;
});
buttonSix.addEventListener("click",()=>{
    displayInput.textContent+=6;
    displayNumber +=6;
});
buttonSeven.addEventListener("click",()=>{
    displayInput.textContent+=7;
    displayNumber +=7;
});
buttonEight.addEventListener("click",()=>{
    displayInput.textContent+=8;
    displayNumber +=8;
});
buttonNine.addEventListener("click",()=>{
    displayInput.textContent+=9;
    displayNumber +=9;
});
buttonZero.addEventListener("click",()=>{
    displayInput.textContent+=0;
    displayNumber +=0;
});

// buttons for the operation keys:

buttonClear.addEventListener("click",()=>{
    displayInput.textContent ="";
    displayResult.textContent="";
    displayNumber="";
    firstNumber=0;
    secondNumber=0;
    calcResult=0;
});

buttonAdd.addEventListener("click",()=>{
    
    currentOperation="add";
    displayInput.textContent="";
    getNumber(displayNumber);
    displayNumber="";
    if(firstNumber!=0&&secondNumber!=0){
        operate(add,firstNumber,secondNumber);
        firstNumber=0;
        secondNumber=calcResult;
    }
});

buttonSubtract.addEventListener("click",()=>{
    currentOperation="subtract";
    displayInput.textContent="";
    getNumber(displayNumber);
    displayNumber="";
    if(firstNumber!=0&&secondNumber!=0){
        operate(subtract,firstNumber,secondNumber);
        firstNumber=0;
        secondNumber=calcResult;
    }

});
buttonMultiply.addEventListener("click",()=>{
    currentOperation="multiply";
    displayInput.textContent="";
    getNumber(displayNumber);
    displayNumber="";
    if(firstNumber!=0&&secondNumber!=0){
        operate(multiply,firstNumber,secondNumber);
        firstNumber=0;
        secondNumber=calcResult;
    }

});

buttonEquals.addEventListener("click",()=>{
    getNumber(displayNumber);
    displayNumber="";
    if(firstNumber!=0&&secondNumber!=0){
        if(currentOperation==="add"){
            operate(add,firstNumber,secondNumber);
            firstNumber=0;
            secondNumber=calcResult;
        } else if(currentOperation==="subtract"){
            operate(subtract,firstNumber,secondNumber);
            firstNumber=0;
            secondNumber=calcResult;
        } else if(currentOperation==="multiply"){
            operate(multiply,firstNumber,secondNumber);
            firstNumber=0;
            secondNumber=calcResult;
        } else if(currentOperation==="divide"){
            operate(divide,firstNumber,secondNumber);
            firstNumber=0;
            secondNumber=calcResult;
        }
    }
});

buttonDivide.addEventListener("click",() =>{
    currentOperation="divide";
    displayInput.textContent="";
    getNumber(displayNumber);
    displayNumber="";
    if(firstNumber!=0&&secondNumber!=0){
        operate(divide,firstNumber,secondNumber);
        firstNumber=0;
        secondNumber=calcResult;
    }


});

// operations

const add=function(numberOne,numberTwo){
    return calcResult=numberOne+numberTwo;
};

const subtract=function(numberOne,numberTwo){
    return calcResult=numberTwo-numberOne;
};

const multiply=function(numberOne,numberTwo){
    return calcResult=numberOne*numberTwo;
};
const divide=function(numberOne,numberTwo){
    return calcResult=numberOne/numberTwo;
};

//

function operate(operator, firstNumber,secondNumber) {

    operator(firstNumber,secondNumber);
    displayResult.textContent=calcResult;
    displayInput.textContent="";
 }

function getNumber(displayNumber){

if(displayNumber){
    if(secondNumber==0){
        return secondNumber=parseFloat(displayNumber);
    } else if(firstNumber==0){
        return firstNumber=parseFloat(displayNumber);
    }
}
}


