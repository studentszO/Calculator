const buttons = document.querySelector(".calculator");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    if (firstNumber.length >= 0 
        && [0,1,2,3,4,5,6,7,8,9].includes(Number(target.textContent))
        && (operator === undefined))
        return firstNumber += target.textContent;
    else if (["/", "+", "*", "-"].includes(target.textContent) && (firstNumber.length > 0))
        return operator = target.textContent;
    else if (operator !== undefined 
        && firstNumber.length > 0
        && [0,1,2,3,4,5,6,7,8,9].includes(Number(target.textContent)))
        return secondNumber += target.textContent
    if (target.textContent === "=") {
        console.log(operate(Number(firstNumber), operator, Number(secondNumber)));
        clearValues();
    }
});


// Test
buttons.addEventListener("click", () => {
    console.log(firstNumber, operator, secondNumber
    )
})

function clearValues() {
    firstNumber = [];
    secondNumber = [];
    operator = undefined;
}
function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function multiply(a, b) {
    return a * b;
};

function operate(numberOne, operator, numberTwo) {
    if (operator === "*")
        return multiply(numberOne, numberTwo)
    else if (operator === "+")
        return add(numberOne, numberTwo)
    else if (operator === "-")
        return substract(numberOne, numberTwo)
    else
        return divide(numberOne, numberTwo)
}

// Clear values on page load
clearValues();
