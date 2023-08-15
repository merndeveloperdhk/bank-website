document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    withdrawField.value = '';
    
    /* if (totalPreviousBalance < newWithdrawAmount) {
        alert('eTo taka nai')
        return;
    } */
    if (isNaN(newWithdrawAmount)) {
        alert('please enter any amount');
        return;
    }

    // withdraw display
    const withdrawDisplayAmount = document.getElementById('withdraw-display');
    const previousWithdrawAmount = parseFloat(withdrawDisplayAmount.innerText);





    const newWithdrawAmountTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawDisplayAmount.innerText = newWithdrawAmountTotal;



    // total balance
    const totalPreviousBalanceElement = document.getElementById('total-balance');
    const totalPreviousBalance = parseFloat(totalPreviousBalanceElement.innerText);
    const totalCurrentBalance = totalPreviousBalance - newWithdrawAmount;
    totalPreviousBalanceElement.innerText = totalCurrentBalance;

})