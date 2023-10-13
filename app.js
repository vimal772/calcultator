const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operation');
const equalTo = document.querySelector('.equals');
const clear = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
let previousContent = document.querySelector('.previousContent');
let currentContent = document.querySelector('.currentContent');
let operation = '';
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
    previousContent.textContent = '';
    currentContent.textContent = result;    
})

function currentDisplay(btn){
    if(currentContent.textContent === ''){
        currentContent.textContent += btn.innerText;
    }
}

function getOperation(button){
    operation = button.innerText;
    // if(previousContent.textContent !== '' && currentContent.textContent !== ''){
    //     // prevOperation = operation;
    // }else{
    if(previousContent.textContent === ''){
        currentContent.textContent += operation;
        previousContent.textContent = currentContent.textContent;
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
            return x/y;
        case '%':
            return x%y;
        default :
            return null;
    }
}