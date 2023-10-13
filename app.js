const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operation');
const equalTo = document.querySelector('.equals');
const clear = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
let previousContent = document.querySelector('.previousContent');
let currentContent = document.querySelector('.currentContent');
const point = document.querySelector('.point');
let operation = null;
let firstOperand ='';
let secondOperand = '';

//eventListeners below
numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        let txt = button.innerText;
        currentDisplay(txt);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        let txt = button.innerText;
        getOperation(txt);
    });
});

equalTo.addEventListener('click',() => {
    startCalculation();    
});

clear.addEventListener('click', () => {
    showClear();
});

allClear.addEventListener('click', () => {
    resetScreen();
});

point.addEventListener('click',() => {
    appointPoint(point.textContent);
});


//Functons below

function currentDisplay(txt){
    currentContent.textContent += txt;
}

function getOperation(txt){
    if(operation !== null) {
        let result = roundResult(getCalculation(operation,parseFloat(previousContent.textContent),parseFloat(currentContent.textContent)));
        operation = null;
        previousContent.textContent = '';
        currentContent.textContent = result;
    }else if(currentContent.textContent === ''){
        return;
    }else{
        operation = txt;
        previousContent.textContent = `${currentContent.textContent} ${operation}`;
        currentContent.textContent = '';
    }
}

function getCalculation(operation,x,y){
    switch (operation) {
        case '+':
            return x+y;
        case '-':
            return x-y;
        case '*':
            return x*y;
        case '/':
            if(y === 0){
                return '';   
            }else{
                return x/y;
            }
        case '%':
            if(y === 0){
                return '';
            }else{
                return x%y;
            }
        default :
            return null;
    }
}

function resetScreen(){
    previousContent.textContent = '';
    currentContent.textContent = '';
    operation = null;
}

function roundResult(num){
    return Math.round(num *1000)/1000;
}

function appointPoint(input){
    if(currentContent.textContent.includes('.')) return null;
    if(currentContent.textContent === '') return currentContent.textContent = '0.';
    else currentContent.textContent += input;
}

function showClear(){
    let content = currentContent.textContent;
    currentContent.textContent = content.split('').slice(0,-1).join('');
}

function startCalculation(){
    if(previousContent.textContent === '' || currentContent.textContent === '') return;
    let result = roundResult(getCalculation(operation,parseFloat(previousContent.textContent),parseFloat(currentContent.textContent)));
    if(result === ''){
        resetScreen();
    }else{
        previousContent.textContent = '';
        currentContent.textContent = result;
        operation = null;
    }
}

//keyboard events
document.addEventListener('keydown',(event)=> {
    if(event.key === 'Backspace' || event.key === 'delete'){
        showClear();
    }else if(event.key === 'c'){
        resetScreen();
    }else if(event.keyCode >= 48 && event.keyCode <= 57){
        currentDisplay(String.fromCharCode(event.keyCode));
    }else if(event.key === '.') appointPoint(event.key);
    else{
        console.log(event.keyCode);
        let txt;
        if(event.keyCode === 187){
            txt = '+';
            getOperation(txt);
        }else if(event.keyCode === 189){
            txt = '-';
            getOperation(txt);
        }
        else if(event.key === 'm'){
            txt = '*';
            getOperation(txt);
        }
        else if(event.keyCode === 191){
            txt = '/';
            getOperation(txt);
        }
        else if(event.key === 'r'){
            txt = '%';
            getOperation(txt);
        }else if(event.key === '=') startCalculation();
        else{
            return;
        }
    }
});