let resultElement = document.getElementById('result');
let historyElement = document.getElementById('history');

function clearDisplay() {
    resultElement.value = '';
    historyElement.innerText = '';
}

function deleteLast() {
    resultElement.value = resultElement.value.slice(0, -1);
}

function appendCharacter(character) {
    resultElement.value += character;
}

function calculateResult() {
    try {
        let expression = resultElement.value;
        let result = eval(expression);
        historyElement.innerText = expression + ' =';
        resultElement.value = result;
    } catch (error) {
        resultElement.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

