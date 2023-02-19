// Returns value of directed Input field
function getInputValue(inputId) {
    // Step 1: Get the element
    const inputField = document.getElementById(inputId);

    // Step 2: Convert Elements string Value to Number
    const inputValueNumber = parseFloat(inputField.value);

    // Clear Input Field
    inputField.value = '';

    return inputValueNumber;
}


// returns innerText of directed Element
function getOutputValue(outputId) {
    const outputElement = document.getElementById(outputId);
    const valueNumber = parseFloat(outputElement.innerText);
    return valueNumber;
}

// set output value
function setOutputValue(outputId, newOutput) {
    const outputElement = document.getElementById(outputId);
    outputElement.innerText = newOutput
}