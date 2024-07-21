const buttons = document.querySelector(".calculator");
const display = document.querySelector(".result-container");

buttons.addEventListener("click", (event) => {
    let target = event.target;


    if ((display.textContent === "0" || triggerNewContent === 1) && [0,1,2,3,4,5,6,7,8,9].includes(Number(target.textContent))) {
        display.textContent = "";
        triggerNewContent = 0;
    }

    if([0,1,2,3,4,5,6,7,8,9].includes(Number(target.textContent)))
        display.textContent += target.textContent;

    if (display.textContent.length > 0 && ["/", "+", "*", "-", "="].includes(target.textContent)) {

                if (firstNumber.length === 0 || equalTrue === 1){
                    firstNumber = display.textContent;
                    equalTrue = 0;}
            // else if (secondNumber.length === 0)
            //     operator = target.textContent;
            else {
                secondNumber = display.textContent;
                firstNumber = operate(Number(firstNumber), operator, Number(secondNumber));
                display.textContent = firstNumber;
                if (target.textContent === "="){
                    secondNumber = [];
                    operator = undefined;
                    equalTrue = 1;}
                }
                
                // if (target.textContent !== "=" && equalTrue === 1){
                    //     operator = target.textContent;
                    //     equalTrue = 0;
                    // }
                    triggerNewContent = 1;
                    operator = target.textContent;
    }

    if (target.textContent === "=")

    // if (target.textContent === "=") {
    //     console.log(operate(Number(firstNumber), operator, Number(secondNumber)));
    //     clearValues();
    // }
    if (target.textContent === "CLEAR") {
        clearValues();
    }
});

// Test
buttons.addEventListener("click", () => {
    console.log(firstNumber, operator, secondNumber
    )
})

let firstNumber = [];
let secondNumber = [];
let operator = undefined;
display.textContent = 0;
let triggerNewContent = 0;
let equalTrue = 0;

function clearValues() {
    firstNumber = [];
    secondNumber = [];
    operator = undefined;
    display.textContent = 0;
    triggerNewContent = 0;
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
// clearValues();
