document.addEventListener('DOMContentLoaded', () => {
    const historyDisplay = document.querySelector('.history');
    const resultDisplay = document.querySelector('.result');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';
    let operator = '';
    let previousInput = '';
    let shouldResetScreen = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (button.classList.contains('number')) {
                handleNumber(buttonText);
            } else if (button.classList.contains('operator')) {
                handleOperator(buttonText);
            } else if (button.classList.contains('equals')) {
                handleEquals();
            }
        });
    });

    function handleNumber(number) {
        if (shouldResetScreen) {
            currentInput = '';
            shouldResetScreen = false;
        }
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number;
        updateResultDisplay();
    }

    function handleOperator(op) {
        if (op === 'AC') {
            clearAll();
            return;
        }

        if (op === 'DEL') {
            deleteLast();
            return;
        }

        if (currentInput === '' && op !== '%') return;

        if (operator !== '' && !shouldResetScreen) {
            calculate();
        }

        operator = op;
        previousInput = currentInput;
        historyDisplay.textContent = `${previousInput} ${operator}`;
        shouldResetScreen = true;
    }

    function handleEquals() {
        if (operator === '' || shouldResetScreen) return;
        calculate();
        historyDisplay.textContent = `${previousInput} ${operator} ${currentInput} =`;
        operator = '';
        shouldResetScreen = true;
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            case '%':
                result = prev / 100 * current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        updateResultDisplay();
    }

    function clearAll() {
        currentInput = '';
        operator = '';
        previousInput = '';
        historyDisplay.textContent = '';
        resultDisplay.textContent = '0';
    }

    function deleteLast() {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === '') {
            resultDisplay.textContent = '0';
        } else {
            updateResultDisplay();
        }
    }

    function updateResultDisplay() {
        resultDisplay.textContent = currentInput;
    }
});