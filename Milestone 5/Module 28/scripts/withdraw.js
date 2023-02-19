// Withdraw Click Event
document.getElementById('withdraw__btn').addEventListener('click', function () {
    // step 1: Get Input Value
    const newAmount = getInputValue('withdraw__input');

    // Positive Number Alert
    if ((Number.isNaN(newAmount) || newAmount < 0)) {
        alert('Please Input Positive Number')
        return
    }

    // step 2: Get output value
    const previousAmount = getOutputValue('withdraw__value');

    // step 3: add new and previous Amount
    const newOutput = previousAmount + newAmount;

    // step 4: set output value
    const previousBalance = getOutputValue('balance__value');
    const currentBalance = previousBalance - newAmount;

    // Out of Money Alert
    if(newAmount > previousBalance){
        alert('Out of money')
        return
    }else{
        setOutputValue('balance__value', currentBalance);
    }

    // step 5: set balance value

    setOutputValue('withdraw__value', newOutput);
})