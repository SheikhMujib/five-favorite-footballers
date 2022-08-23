//To get input field value
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseInt(inputFieldAmountString);

    // inputField.value = '';

    if (isNaN(inputFieldAmount)) {
        alert('Please, provide a valid number.');
        return;
    }

    return inputFieldAmount;
}

//To get and set element value
function setElementValueById(elementId, element) {
    const totalElementField = document.getElementById(elementId);
    const totalElementAmountString = element;
    const totalElementAmount = parseInt(totalElementAmountString);
    totalElementField.innerText = totalElementAmount;
}