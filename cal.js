const inputAnswer = document.getElementById('inputAnswer');
const equation = document.getElementById('equation');
const clear = document.querySelector('.bb');
const historyArea = document.querySelector('.history');
const mainArea = document.querySelector('.calculator-container');

historyArea.style.display = "none";

function displayHistory() {
    historyArea.style.display = historyArea.style.display === "none" ? "" : "none";
    mainArea.style.borderRadius = historyArea.style.display === "none" ? "10px" : "10px 0px 0px 10px";
}

document.getElementById('showHistory').addEventListener('click', displayHistory);

let operand1 = null;
let operator = null;

function afficher(value) {
    inputAnswer.textContent += value;
}

function clearInput() {
    inputAnswer.textContent = '';
    equation.textContent = '0';
    operand1 = null;
    operator = null;
}

clear.addEventListener('click', clearInput);

function calculate() {
    const inputValue = inputAnswer.textContent;
    const result = eval(inputValue);

    equation.textContent = inputValue + ' = ';
    inputAnswer.textContent = result;

    const historyEntry = `${equation.textContent} ${inputAnswer.textContent}`;
    addToHistory(historyEntry);
}

function addToHistory(entry) {
    const historyList = document.querySelector('.history ul');
    const newHistoryItem = document.createElement('li');
    newHistoryItem.textContent = entry;
    historyList.appendChild(newHistoryItem);
}
