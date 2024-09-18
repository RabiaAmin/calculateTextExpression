 import { calculate } from "./js/mathUtility.js";

// Add an event listener to the button
document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the value from the input field
    let expresion = document.getElementById('expressionInput').value;

    let result = calculate(expresion);

    document.getElementById('resultInput').value = result;
    // Log the value to the console
    console.log("this is ", expresion);
    console.log("this is ", result);
});