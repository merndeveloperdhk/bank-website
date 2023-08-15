document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositElement = document.getElementById('deposit-input-field');
    const newDeposit = parseFloat(newDepositElement.value);
    // deposit display
    const depositDisplay = document.getElementById('deposit-display');
    newDepositElement.value = '';
    const previousDepositAmount = parseFloat(depositDisplay.innerText);
   
    // in NaN for this code
    if(isNaN(newDeposit)){
        alert('Please enter any amount.');
        return;
    }
    
    const newDepositTotal = previousDepositAmount + newDeposit;
    depositDisplay.innerText = newDepositTotal;
    
    // total balance
    const totalPreviousBalanceElement = document.getElementById('total-balance');
    const totalPreviousBalance = parseFloat(totalPreviousBalanceElement.innerText);
    const totalCurrentBalance = totalPreviousBalance + newDeposit;
    totalPreviousBalanceElement.innerText = totalCurrentBalance;
    
})