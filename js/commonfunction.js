function findValueById(idName){
    const inputFieldValue = document.getElementById(idName);
    const inputFieldString = inputFieldValue.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    // if(isNaN(inputFieldNumber)){
    //     alert('Please input a number');
    //     inputFieldValue.value = '';
    // }

    // else{
        
    return inputFieldNumber;
    // }
}
// For inner text
function findInnerTextValueById(idName){
    const inputFieldValue = document.getElementById(idName);
    const inputFieldString = inputFieldValue.innerText;
    const inputFieldNumber = parseFloat(inputFieldString);
    if(isNaN(inputFieldNumber)){
        alert('Please input a number');
        inputFieldValue.innerText = '00';
    }

    else{
        
    return inputFieldNumber;
    }
}

// All field value null
function removeValue(){
    document.getElementById('income-field').value = '';
        document.getElementById('food-field').value = '';
        document.getElementById('rent-field').value = '';
        document.getElementById('cloths-field').value = '';

}

