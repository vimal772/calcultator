const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operation');
const equalTo = document.querySelector('.equals');
const clear = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
let previousContent = document.querySelector('.previousContent');
let currentContent = document.querySelector('.currentContent');
let operation = null;
let firstOperand ='';
let secondOperand = '';
// let prevOperation = '';


numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        currentDisplay(button);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        getOperation(button);
    });
});

equalTo.addEventListener('click',() => {
    if(previousContent.textContent === '' || currentContent.textContent === '') return;
    let result = getCalculation(operation,parseFloat(previousContent.textContent),parseFloat(currentContent.textContent));
    if(result === ''){
        resetScreen();
    }else{
        previousContent.textContent = '';
        currentContent.textContent = result;
        operation = null;
    }    
});

clear.addEventListener('click', () => {
    let content = currentContent.textContent;
    currentContent.textContent = content.split('').slice(0,-1).join('');
});

allClear.addEventListener('click', () => {
    resetScreen();
});

function currentDisplay(btn){
    if(currentContent.textContent.includes('.')) return;
    if(currentContent.textContent === ''){
        currentContent.textContent += btn.innerText;
    }else{
        currentContent.textContent += btn.innerText;
    }
}

function getOperation(button){
    if(operation !== null) {
        let result = getCalculation(operation,parseFloat(previousContent.textContent),parseFloat(currentContent.textContent));
        operation = null;
        previousContent.textContent = '';
        currentContent.textContent = result;
    }
    operation = button.innerText;
    previousContent.textContent = `${currentContent.textContent} ${operation}`;
    currentContent.textContent = '';
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