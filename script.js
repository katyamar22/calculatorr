// Event listener for when button is clicked
/* DOMcontentloaded makes sure the HTML is done loading befor executing
JavaScript since we are using DOM  */
document.addEventListener("DOMContentLoaded", function() {

    // adding our result and button elements to a variable
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.button');
    
    let currentOperand = '';
    let prevOperand = '';
    let operator = '';

    // Event listeners for all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;

            // Clears screen when hitting the reset button
            if (value === 'C') {
                clear();
            // Calculates
            } else if (value === '=') {
                calculate();
            // Combines the values submitted
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

    // Function for clearing screen
    function clear() {
        currentOperand = '';
        prevOperand = '';
        operator = '';
        result.value = '0';
    }

    // Displays Error Message when calculation can not be executed
    function displayError(message) {
        result.value = message;

    }

    // Function to calculate input
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
                if (current === 0) {
                    displayError("ERROR");
                    return;
                }
                resultValue = prev / current;
                break;
            default:
                displayError("ERROR");
                return ;
        }

        result.value = resultValue;
        currentOperand = resultValue.toString();
        prevOperand = '';
        operator = '';
        
    }
});