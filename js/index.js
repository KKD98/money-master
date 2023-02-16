document.getElementById('calculate').addEventListener('click', function () {
    const incomeFieldValue = findValueById('income-field');

    if (isNaN(incomeFieldValue)) {
        alert('Please input all the numbers');
        document.getElementById('income-field').value = '';
        removeValue();
    }
    else {
        const foodFieldValue = findValueById('food-field');

        const rentFieldValue = findValueById('rent-field');

        const clothsFieldValue = findValueById('cloths-field');

        const totalExpenseValue = findInnerTextValueById('total-expense');
        if(foodFieldValue > 0 && rentFieldValue > 0 && clothsFieldValue > 0){
            const totalExpense = foodFieldValue + rentFieldValue + clothsFieldValue;
    
        const balanceValue = findInnerTextValueById('balance');
        const newBalance = incomeFieldValue - totalExpense;


        if (incomeFieldValue > totalExpense) {
            document.getElementById('total-expense').innerText = totalExpense;
            document.getElementById('balance').innerText = newBalance;
        }

        else {
            alert('You have not enough balance');
            removeValue();
        }
        }

        else{
            alert('Input cannot be a negative number');
            removeValue();
        }
    }
})

document.getElementById('save').addEventListener('click', function () {
    const incomeFieldValue = findValueById('income-field');
    if (!isNaN(incomeFieldValue)) {
        const savings = incomeFieldValue * 0.2;
        console.log(savings)

        // const savingAmountValue = findInnerTextValueById('saving-amount');
        document.getElementById('saving-amount').innerText = savings;

        const balanceValue = findInnerTextValueById('balance');
        const remainingValance = balanceValue - savings;
        document.getElementById('remaining-balance').innerText = remainingValance;
    }
    else {
        alert('There is no values');
    }
})