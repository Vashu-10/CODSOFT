// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let secondOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                secondOperand = null;
                display.innerText = '0';
            } else if (value === '=') {
                secondOperand = parseFloat(currentInput);
                if (operator && firstOperand !== null && secondOperand !== null) {
                    const result = calculate(firstOperand, secondOperand, operator);
                    display.innerText = result;
                    currentInput = result.toString();
                    firstOperand = result;
                    secondOperand = null;
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
