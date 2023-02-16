document.getElementById('calculate').addEventListener('click', function () {
    const incomeFieldValue = findValueById('income-field');

    if (isNaN(incomeFieldValue)) {
        alert('Please input a number');
        document.getElementById('income-field').value = '';
    }
    else {
        const foodFieldValue = findValueById('food-field');

        const rentFieldValue = findValueById('rent-field');

        const clothsFieldValue = findValueById('cloths-field');

        const totalExpenseValue = findInnerTextValueById('total-expense');
        const totalExpense = foodFieldValue + rentFieldValue + clothsFieldValue;
        // document.getElementById('total-expense').innerText = totalExpense;

        const balanceValue = findInnerTextValueById('balance');
        const newBalance = incomeFieldValue - totalExpense;
        // document.getElementById('balance').innerText = newBalance;

        if (incomeFieldValue > totalExpense) {
            document.getElementById('total-expense').innerText = totalExpense;
            document.getElementById('balance').innerText = newBalance;
        }

        else {
            alert('You have not enough balance');
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