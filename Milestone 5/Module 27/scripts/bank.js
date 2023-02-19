let dipositOutput = document.getElementById('diposit__value')
let withdrawOutput = document.getElementById('withdraw__value')
let balanceOutput = document.getElementById('balance__value')
const dipositInput = document.getElementById('diposit__input')
const withdrawInput = document.getElementById('withdraw__input')
const dipositBtn = document.getElementById('diposit__btn')
const withdrawBtn = document.getElementById('withdraw__btn')


// Diposit Value

dipositBtn.addEventListener('click', function () {
    // Alert
    if (dipositInput.value == '') {
        alert('Input Number')
        return
    }

    // Diposit Output
    const initialDipositTotal = parseFloat(dipositOutput.innerText)
    const newDipositAmount = parseFloat(dipositInput.value)
    const currentDipositTotal = initialDipositTotal + newDipositAmount
    dipositOutput.innerText = currentDipositTotal

    // Balance Output
    const initialBalance = parseFloat(balanceOutput.innerText)
    const currentBalanceTotal = initialBalance + newDipositAmount
    balanceOutput.innerText = currentBalanceTotal

    // Clear InputField
    dipositInput.value = ''
})

withdrawBtn.addEventListener('click', function () {
    // Alert
    if (withdrawInput.value == '') {
        alert('Input Number')
        return
    }

    // Diposit Output
    const initialWithdrawTotal = parseFloat(withdrawOutput.innerText)
    const newWithdrawAmount = parseFloat(withdrawInput.value)
    const currentWithdrawTotal = initialWithdrawTotal + newWithdrawAmount

    // Balance Output
    const initialBalance = parseFloat(balanceOutput.innerText)
    const currentBalanceTotal = initialBalance - newWithdrawAmount

    // Alert
    if (newWithdrawAmount > initialBalance) {
        alert('Insuficient Money')

        // Clear InputField
        withdrawInput.value = ''
        return;
    }

    // Changing Value
    withdrawOutput.innerText = currentWithdrawTotal
    balanceOutput.innerText = currentBalanceTotal

    // Clear InputField
    withdrawInput.value = ''
})