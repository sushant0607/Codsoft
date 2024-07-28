
let display = document.getElementById('display');
let currentInp = '';

function appendNumber(number) {
    currentInp += number;
    display.value = currentInp;
}

function appendOp(operator) {
    currentInp += ` ${operator} `;
    display.value = currentInp;
}

function calcResult() {
    currentInp = eval(currentInp);
    display.value = currentInp;
}

function clearDisplay() {
    currentInp = '';
    display.value = '';
}