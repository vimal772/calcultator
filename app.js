const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operation');
const equalTo = document.querySelector('.equals');
const clear = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
let previousContent = document.querySelector('.previousContent');
let currentContent = document.querySelector('.currentContent');
let operation = '';

console.log(numberButtons);
console.log(operationButtons);
console.log(equalTo);
console.log(clear);
console.log(allClear);
console.log(previousContent);
console.log(currentContent);


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

function currentDisplay(btn){
    let value = btn.innerText;
    currentContent.textContent += value;
}

function getOperation(button){
    operation = button.innerText;
    console.log(operation);
}