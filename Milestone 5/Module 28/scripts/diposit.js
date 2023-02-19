
// diposit Click Eent
document.getElementById('diposit__btn').addEventListener('click', function () {
    // step 1: get input Value
    const newAmount = getInputValue('diposit__input');
    // Positive Number Alert
    if ((Number.isNaN(newAmount) || newAmount < 0)) {
        alert('Please Input Positive Number')
        return
    }

    // step 2: Get output value
    const previousAmount = getOutputValue('diposit__value');

    // step 3: add new and previous Amount
    const newOutput = previousAmount + newAmount;

    // step 4: set balance value
    const previousBalance = getOutputValue('balance__value');
    const currentBalance = previousBalance + newAmount;
    setOutputValue('balance__value', currentBalance);

    // step 5: set output value
    setOutputValue('diposit__value', newOutput);
})