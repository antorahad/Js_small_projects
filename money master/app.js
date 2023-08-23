document.getElementById('deposite-btn').addEventListener('click', function(){
    /*Getting value from input and convert it into number*/
    const inputField = document.getElementById('depoiste-input');
    const inputText = inputField.value;
    const inputValueString = inputText;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';

    /*Getting the value of current amount of deposite and updating the deposite amount from input value*/
    const currentDesposite = document.getElementById('deposite-amount');
    const currentDespositeElement = currentDesposite.innerText;
    const currentDepositeAmountString = currentDespositeElement;
    const currentDepositeAmount = parseFloat(currentDepositeAmountString);
    const newDepositeAmount = currentDepositeAmount + inputValue;
    currentDesposite.innerText = newDepositeAmount.toFixed(2);

    /*Getting the value of current amount of balance and updating the balance amount from input value*/
    const currentBalance = document.getElementById('total-amount');
    const currentBalanceElement = currentBalance.innerText;
    const currentBalanceAmountString = currentBalanceElement;
    const currentBalanceAmount = parseFloat(currentBalanceAmountString);
    const updateBalance = currentBalanceAmount + inputValue;
    currentBalance.innerText = updateBalance.toFixed(2);
    
});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    /*Getting value from input and convert it into number*/
    const inputField = document.getElementById('withdraw-input');
    const inputText = inputField.value;
    const inputValueString = inputText;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';

    /*Getting the value of current amount of deposite and updating the deposite amount from input value*/
    const currentWithdraw = document.getElementById('withdraw-amount');
    const currentWithdrawElement = currentWithdraw.innerText;
    const currentWithdrawAmountString = currentWithdrawElement;
    const currentWithdrawAmount = parseFloat(currentWithdrawAmountString);
    const newWithdrawAmount = currentWithdrawAmount + inputValue;
    currentWithdraw .innerText = newWithdrawAmount.toFixed(2);

        /*Getting the value of current amount of balance and updating the balance amount from input value*/
        const currentBalance = document.getElementById('total-amount');
        const currentBalanceElement = currentBalance.innerText;
        const currentBalanceAmountString = currentBalanceElement;
        const currentBalanceAmount = parseFloat(currentBalanceAmountString);
        const updateBalance = currentBalanceAmount - inputValue;
        currentBalance.innerText = updateBalance.toFixed(2);
});