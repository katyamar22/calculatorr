//Event listener for when button is clicked
//DOMcontentloaded makes sure the HTML is done loading befor executing
//JavaScript since we are using DOM
document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.button');
    
    let currentOperand = '';
    let prevOperand = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;

            if (value === 'C') {
                clear();
            } else if (value === '=') {
                calculate();
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                prevOperand = currentOperand;
                currentOperand = '';
            } else {
                currentOperand += value;
                result.value = currentOperand;
            }
        });
    });

    function clear() {
        currentOperand = '';
        prevOperand = '';
        operator = '';
        result.value = '0';
    }

    function calculate() {
        let resultValue;
        const prev = parseFloat(prevOperand);
        const current = parseFloat(currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                resultValue = prev + current;
                break;
            case '-':
                resultValue = prev - current;
                break;
            case '*':
                resultValue = prev * current;
                break;
            case '/':
                resultValue = prev / current;
                break;
            default:
                return;
        }

        result.value = resultValue;
        currentOperand = resultValue.toString();
        prevOperand = '';
        operator = '';
    }
});